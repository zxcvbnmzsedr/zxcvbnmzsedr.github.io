---
title: 在国内网络环境下部署 Langfuse 到 K3s 的完整实践
short_title: 
date: 2025-10-31 03:15:49
article: true
timeline: false
isOriginal: true
permalink: /pages/5d7d87/
categories: 
  - post
tags: 
  - 
---


<!-- more -->




# 在国内网络环境下部署 Langfuse 到 K3s 的完整实践

# 在国内网络环境下部署 Langfuse 到 K3s 的完整实践

## 1. 场景与约束

- **集群版本**：K3s 多节点，默认 `local-path` StorageClass。
- **网络限制**：无法直接访问 Docker Hub 与 GitHub，需要使用国内镜像或代理。
- **存储需求**：Langfuse 依赖 PostgreSQL、ClickHouse、Redis、MinIO 等组件，要求提供稳定的持久卷。

## 2. 准备工作

### 2.1 配置镜像加速

`/etc/rancher/k3s/registries.yaml` 中启用阿里云或 DaoCloud 镜像：

```yaml
mirrors:
  docker.io:
    endpoint:
      - "https://xxxx.mirror.aliyuncs.com"
```

所有 Langfuse 相关镜像统一走 `docker.m.daocloud.io` 代理。

### 2.2 确认 NFS 目录

在任一节点执行：

```bash
mkdir -p /mnt/langfuse \
  && mount -t nfs xxx:/nfs/data /mnt/langfuse \
  && mkdir -p /mnt/langfuse/langfuse \
  && umount /mnt/langfuse
```

### 2.3 下载 Helm Chart

通过 `ghfast.top` 代理：

```bash
curl -L -o langfuse-1.5.8.tgz \
  https://ghfast.top/https://github.com/langfuse/langfuse-k8s/releases/download/langfuse-1.5.8/langfuse-1.5.8.tgz
```

该 Chart 内嵌 Bitnami 依赖 (PostgreSQL、ClickHouse、Valkey、MinIO 等)。

## 3. 自定义 Values（核心）

`/root/langfuse.yml`：

```yaml
langfuse:
  salt:
    value: secureSalt
  nextauth:
    secret:
      value: "langfuse"
  image:
    pullPolicy: IfNotPresent
  web:
    image:
      repository: "docker.m.daocloud.io/langfuse/langfuse"
  worker:
    image:
      repository: "docker.m.daocloud.io/langfuse/langfuse-worker"

postgresql:
  global:
    imageRegistry: "docker.m.daocloud.io"
    defaultStorageClass: "langfuse"
  image:
    registry: "docker.m.daocloud.io"
    repository: "bitnamilegacy/postgresql"
  primary:
    persistence:
      storageClass: "langfuse"
  volumePermissions:
    enabled: true
    image:
      registry: "docker.m.daocloud.io"
      repository: "bitnamilegacy/os-shell"
  auth:
    username: langfuse
    password: "langfuse"

redis:
  global:
    imageRegistry: "docker.m.daocloud.io"
  image:
    registry: "docker.m.daocloud.io"
    repository: "bitnamilegacy/valkey"
  architecture: standalone
  primary:
    persistence:
      storageClass: "langfuse"
  auth:
    password: "langfuse"

clickhouse:
  global:
    imageRegistry: "docker.m.daocloud.io"
  image:
    registry: "docker.m.daocloud.io"
    repository: "bitnamilegacy/clickhouse"
  zookeeper:
    global:
      imageRegistry: "docker.m.daocloud.io"
    image:
      registry: "docker.m.daocloud.io"
      repository: "bitnamilegacy/zookeeper"
    replicaCount: 1
    persistence:
      storageClass: "langfuse"
  replicaCount: 1
  clusterEnabled: false
  persistence:
    storageClass: "langfuse"
  auth:
    password: "langfuse"

s3:
  global:
    imageRegistry: "docker.m.daocloud.io"
  image:
    registry: "docker.m.daocloud.io"
    repository: "bitnamilegacy/minio"
  persistence:
    storageClass: "langfuse"
  auth:
    rootPassword: "langfuse"
```

关键点：

1. 所有 Bitnami 子 Chart 覆盖 `global.imageRegistry`，避免默认访问 `docker.io`。
2. 统一持久卷的 `storageClass` 为 `langfuse`，确保 NFS 提供存储。
3. 为 PostgreSQL `volumePermissions` 显式指定 `os-shell` 镜像，解决 init 容器拉取失败。

## 4. 部署流程

```bash
kubectl create namespace langfuse

KUBECONFIG=/etc/rancher/k3s/k3s.yaml \
helm upgrade --install langfuse ./langfuse-1.5.8.tgz \
  -n langfuse -f langfuse.yml
```

若需重置：`helm uninstall langfuse -n langfuse` 再重新安装。

## 5. 存储排障

- 删除遗留的 `local-path` PVC：

```bash
kubectl delete pvc data-langfuse-zookeeper-{0..2} -n langfuse
```

- 确认新的 NFS PVC：

```bash
kubectl get pvc -n langfuse
```

如 Zookeeper PVC 未自动生成，可手动补齐：

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-langfuse-zookeeper-0
  namespace: langfuse
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 8Gi
  storageClassName: langfuse
```

## 6. 镜像准备

建议提前导入镜像到节点缓存：

```bash
crictl pull docker.m.daocloud.io/langfuse/langfuse:3.120.0
crictl pull docker.m.daocloud.io/langfuse/langfuse-worker:3.120.0
crictl pull docker.m.daocloud.io/bitnamilegacy/os-shell:12-debian-12-r37
crictl pull docker.m.daocloud.io/bitnamilegacy/postgresql:17.3.0-debian-12-r1
crictl pull docker.m.daocloud.io/bitnamilegacy/valkey:8.0.2-debian-12-r2
crictl pull docker.m.daocloud.io/bitnamilegacy/clickhouse:25.2.1-debian-12-r0
crictl pull docker.m.daocloud.io/bitnamilegacy/zookeeper:3.9.3-debian-12-r8
crictl pull docker.m.daocloud.io/bitnamilegacy/minio:2024.12.18-debian-12-r1
```

镜像上传到私有代理后，可通过 `kubectl delete pod` 触发重新拉取。

## 7. 数据库初始化注意事项

- 首次部署会自动创建用户 `langfuse` 与数据库 `postgres_langfuse`。
- 如果沿用旧数据卷（PVC 未清理），需要手动创建角色与库：

```bash
kubectl exec langfuse-postgresql-0 -n langfuse -- \
  env PGPASSWORD=<postgres管理员密码> \
  /opt/bitnami/postgresql/bin/psql -U postgres <<SQL
CREATE ROLE langfuse LOGIN PASSWORD $$langfuse$$;
CREATE DATABASE postgres_langfuse OWNER langfuse;
GRANT ALL PRIVILEGES ON DATABASE postgres_langfuse TO langfuse;
SQL
```

- 若不保留旧数据，可删除 `data-langfuse-postgresql-0` PVC 以及对应 NFS 目录，然后重新执行 Helm 安装。

## 8. 常见问题与解决

|问题|表现|解决方案|
| ------------------| --------------| ------------------------------------------|
|Chart 下载失败|`unexpected EOF`|通过 `ghfast.top` 或其他代理下载后上传到节点。|
|镜像拉取超时|`ImagePullBackOff` 指向 `docker.io`|在 values 中覆盖镜像仓库，提前 `crictl pull`。|
|NFS 挂载失败|`No such file or directory`|确认 NFS 路径存在并重启 `eip-nfs-langfuse`。|
|PVC 长期 Pending|`persistentvolumeclaim not found`|删除旧 PVC，必要时手工创建同名 PVC。|
|Prisma 认证失败|`Role "langfuse" does not exist`|手动建库建用户或清理旧数据卷重新初始化。|

## 9. 验证步骤

```bash
kubectl get pods -n langfuse
kubectl get pvc -n langfuse
kubectl logs -n langfuse deploy/langfuse-web
kubectl port-forward svc/langfuse-web -n langfuse 3000:3000
```

访问 `http://127.0.0.1:3000`，确认 Langfuse 页面可正常打开。

## 10. 收尾事项

- 清理已释放但未删除的 PV，避免占用 NFS 空间。
- 将本文档与 `langfuse.yml` 纳入版本库，后续变更统一维护。
- 上线前务必更换默认密码，并视需求改为外部 PostgreSQL、对象存储等托管服务。

> 提示：部署前先完成镜像拉取、NFS 目录验证，可显著缩短排障时间。
