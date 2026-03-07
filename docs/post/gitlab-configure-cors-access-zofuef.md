---
title: GitLab 配置CORS访问
short_title: 
date: 2025-11-12 07:43:53
article: true
timeline: false
isOriginal: true
permalink: /pages/1715e7/
categories: 
  - post
tags: 
  - 
---


<!-- more -->




# GitLab 配置CORS访问

## 1. 背景与诉求

- 内部 GitLab：`http://192.168.0.22`，需要让 Raw 文件（`/kangaroo/host/raw/master/nav.yaml` 等）支持被任意前端以 `fetch`/XHR 调用。
- 场景以公开只读内容为主，不希望因为浏览器同源策略导致控制台报错。
- 期望：所有域名都能成功发起 GET/OPTIONS 请求，且无需携带 Cookie。

## 2. 启用 GitLab 内置 CORS（必做）

`/etc/gitlab/gitlab.rb`：

```ruby
gitlab_rails['cors_enable'] = true
gitlab_rails['cors_allow_any'] = true
gitlab_rails['cors_allow_origins'] = ['*']
gitlab_rails['cors_allow_methods'] = ['GET', 'HEAD', 'OPTIONS']
gitlab_rails['cors_allow_headers'] = ['*']
gitlab_rails['cors_allow_credentials'] = false
gitlab_rails['cors_max_age'] = 3600
```

关键点：

1. `cors_allow_any = true` 会自动把 `Access-Control-Allow-Origin` 设置为 `*`，只能与 `cors_allow_credentials = false` 搭配。
2. 生产环境若需要携带 Cookie/Private Token，请改回白名单模式而不是 `*`。
3. 变更后执行：

```bash
sudo gitlab-ctl reconfigure
sudo gitlab-ctl restart gitlab-workhorse
```

## 3. 验证 Rails 层的返回头

使用 `curl` 模拟浏览器请求：

```bash
curl -I \
  -H 'Origin: http://example.com' \
  'http://192.168.0.22/kangaroo/host/raw/master/nav.yaml?_=1762929580943'
```

若仍看不到 `Access-Control-Allow-Origin`，说明 Workhorse/Nginx 在 Raw 路径上未把 Rails 注入的头透传出来，需要在反向代理层继续加固。

## 4. 在 Nginx 层兜底 CORS Header（全域场景）

在同一个 `gitlab.rb` 末尾追加自定义配置：

```ruby
nginx['custom_gitlab_server_config'] = <<-'GITLAB_CORS'
  add_header 'Access-Control-Allow-Origin' '*' always;
  add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, PATCH, DELETE, OPTIONS' always;
  add_header 'Access-Control-Allow-Headers' 'DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization' always;
  add_header 'Access-Control-Allow-Credentials' 'false' always;
  add_header 'Access-Control-Max-Age' '86400' always;

  if ($request_method = 'OPTIONS') {
    return 204;
  }
GITLAB_CORS
```

说明：

- `always` 确保 4xx/5xx 同样带上头，浏览器不会因为预检失败而中止。
- `if ($request_method = 'OPTIONS')` 直接返回 204，减少 Rails 负载。
- 这段配置作用于 GitLab 主站所有虚拟主机，适用于“全部公开且无需凭证”的场景。

再次套用配置并重启 Nginx：

```bash
sudo gitlab-ctl reconfigure
sudo gitlab-ctl restart nginx
```

## 5. 二次验证

- GET 请求：同第 3 步 `curl -I`，此时响应应包含 `Access-Control-Allow-Origin: *`。
- 预检：

```bash
curl -I -X OPTIONS \
  -H 'Origin: http://foo.bar' \
  -H 'Access-Control-Request-Method: GET' \
  'http://192.168.0.22/kangaroo/host/raw/master/nav.yaml'
```

预期返回 204，且列出 `Allow-Methods/Allow-Headers`。

## 6. 排障要点

1. **配置语法**：`if ($request_method = 'OPTIONS')` 中的 `$` 必不可少，否则 `gitlab-ctl restart nginx` 会报 `invalid condition "="`，导致门户直接挂掉。可用 `sed -i` 或 `vim` 精准修改。
2. **日志位置**：

    - Nginx：`/var/log/gitlab/nginx/current`
    - Workhorse：`/var/log/gitlab/gitlab-workhorse/current`
    - Prometheus 报 `leveldb/storage: corrupted or incomplete meta file` 时，可酌情清理 `/var/opt/gitlab/prometheus/data` 并重新启动 `prometheus`，避免额外干扰。
3. **服务状态**：`gitlab-ctl status` 能快速确认 `nginx` / `gitlab-workhorse` 是否因配置错误停止。
4. **回滚策略**：保留原始 `gitlab.rb` 片段或使用 `git diff /etc/gitlab/gitlab.rb`，一旦测试失败立即还原并 `reconfigure`。

## 7. 最终交付清单

- [ ] `gitlab_rails` 内置 CORS 打开，保证 Rails 层行为一致。
- [ ] Nginx `custom_gitlab_server_config` 注入全域 `Access-Control-Allow-*` 头。
- [ ] `gitlab-ctl reconfigure`、`gitlab-ctl restart nginx`、`gitlab-ctl restart gitlab-workhorse` 全量执行且无报错。通过`gitlab-ctl tail`查看启动日志
- [ ] 通过 GET/OPTIONS `curl` 验证 Raw URL。
- [ ] 浏览器控制台无 CORS/预检告警，实际业务前端可直接消费 Raw 文件。
