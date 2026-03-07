---
title: Jenkins 中使用 bitnami kubectl 执行 kubectl apply -f 无响应的排查与解决
short_title: 
date: 2025-09-22 07:30:46
article: true
timeline: false
isOriginal: true
permalink: /pages/6b2f3d/
categories: 
  - post
tags: 
  - 
---


<!-- more -->




# Jenkins 中使用 bitnami kubectl 执行 kubectl apply -f 无响应的排查与解决

### 背景

在 Jenkins Pipeline 中调用 bitnami/kubectl 容器执行 kubectl apply -f 时，流水线没有报错也没有输出，表现为“无任何反应/卡住”。更换命令或延长超时无效。

参考 Jenkins 社区讨论后将 runAsUser: root 修改为 runAsUser: '1000' 后问题立刻消失，命令正常执行。[参考来源](https://community.jenkins.io/t/adding-kubectl-container-to-pipeline-not-working/3316/3)

### 现象

- 在 Jenkins 动态 agent（Kubernetes 插件）中使用 bitnami/kubectl。
- 步骤如 sh 'kubectl apply -f k8s.yaml' 不输出、不报错，Pipeline 长时间停留在该步骤。
- 切换为其他“保活命令”（如 sleep）只会延长挂起时间，并不能让 kubectl 正常执行。

### 关键线索

- Jenkins 社区帖子指出某些场景下容器内命令会挂起，建议在 Pod 的 spec.securityContext 中设置：

  ```shell
   spec:
      securityContext:
        runAsUser: 1000
  ```

- 将原本的 runAsUser: root（或 0）改为 runAsUser: '1000' 后，kubectl apply -f 立即正常。

### 原因分析（实践推断）

- bitnami/kubectl 镜像默认非 root 运行更为一致，部分环境/挂载（如 emptyDir、workspace、挂载卷的权限映射）在 root 身份下可能与 Jenkins agent 的 workspace UID/GID 映射不一致，导致交互式命令或 TTY/IO 管道异常。
- Jenkins Kubernetes 插件在多容器 sidecar 下，权限/用户不匹配可能引发命令挂起而非直接报错。
- 将运行用户设置为常见的非 root UID（如 1000）可避免权限/挂载/pty 行为异常。

### 解决方案与配置示例

- 如果你使用 Jenkins Kubernetes 插件的 yaml 内联方式，直接在 Pod 级 securityContext 设置 runAsUser: 1000：

  ```shell
  apiVersion: v1
  kind: Pod
  spec:
    securityContext:
      runAsUser: 1000
    containers:
      - name: kubectl
        image: bitnami/kubectl:latest
        tty: true
        command:
          - cat
  ```

- 在 Jenkinsfile 中（示例，使用 podTemplate + 内联 yaml），将原本的 runAsUser: root 改为 runAsUser: '1000'：

  ```shell
  podTemplate(
    yaml: """
  apiVersion: v1
  kind: Pod
  spec:
    securityContext:
      runAsUser: 1000
    containers:
      - name: kubectl
        image: bitnami/kubectl:latest
        tty: true
        command:
          - cat
  """
  ) {
    node(POD_LABEL) {
      container('kubectl') {
        sh 'kubectl version --client=true'
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
  ```

- 若原先写的是 runAsUser: root（或 0），请直接改为 runAsUser: '1000' 即可。

### 验证步骤

1. 保存并重新运行 Pipeline。
2. 观察 kubectl 步骤是否正常输出并完成。
3. 如仍偶发挂起，建议：

    1. 确保 tty: true，容器 command 使用 cat 保持存活（而非 sleep 固定时长）。
    2. 确认集群安全策略（PSP/PodSecurity/OPA/Gatekeeper）未阻断所需权限。
    3. 检查 Jenkins kube 插件版本与 bitnami/kubectl 镜像版本是否过旧。

### 经验小结

- 在 Jenkins 动态 Pod/sidecar 场景，优先避免以 root 运行 kubectl 容器；runAsUser: 1000 更通用稳定。
- “卡住无输出”多数是权限与交互环境问题而非命令本身问题。
- 社区经验对症有效：将 runAsUser 设为 1000 解决执行挂起。[参考](https://community.jenkins.io/t/adding-kubectl-container-to-pipeline-not-working/3316/3)
