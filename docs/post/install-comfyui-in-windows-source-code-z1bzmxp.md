---
title: Windows源码安装ComfyUI
short_title: 
date: 2025-09-15 10:25:09
article: true
timeline: false
isOriginal: true
permalink: /pages/340eb0/
categories: 
  - post
tags: 
  - 
---


<!-- more -->




# Windows源码安装ComfyUI

# Windows 源码安装 ComfyUI（精简版指南）

本文提供在 Windows 上用 Miniconda 从源码安装 ComfyUI 的稳定步骤，并附常见问题排查与插件推荐。

## 1. 安装 Miniconda

从官方链接下载安装包并按向导完成安装：

```
https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe
```

首次使用 PowerShell，建议初始化 Conda：

```
conda init powershell
```

## 2. 获取源码并创建环境

如未配置 SSH，可使用 HTTPS 克隆。

```
# 克隆仓库（两选一）
git clone https://github.com/comfyanonymous/ComfyUI.git
# 或
git clone git@github.com:comfyanonymous/ComfyUI.git

# 进入目录
cd ComfyUI

# 创建并激活虚拟环境（推荐 Python 3.10/3.11；3.12 需确保依赖兼容）
conda create -n comfyui python=3.11 -y
conda activate comfyui
```

## 3. 安装 PyTorch（按需选择 GPU 或 CPU）

- 如果有 NVIDIA 显卡并安装了匹配的驱动，优先安装 GPU 版；否则使用 CPU 版。
- 建议使用 PyTorch 稳定渠道，避免版本更新导致的不兼容。

```
# GPU（示例：CUDA 12.1，对应官方稳定轮子）
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# 如需 CPU 版
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
```

若你明确需要最新版（更前沿，但风险更高），可改用：

```
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu129
```

## 4. 安装项目依赖

```
pip install -r .\requirements.txt
```

如遇到国内网络问题，可先配置镜像后再安装，安装 PyTorch 仍需保持其官方源。

## 5. 启动 ComfyUI（可选参数）

```
python main.py --listen --port 8188 --auto-launch
```

常用参数说明：

- `--listen`：允许局域网访问。
- `--port 8188`：指定端口。
- `--auto-launch`：启动后自动打开浏览器。

## 6. 推荐插件与扩展

### 6.1 ComfyUI-Manager（强烈推荐）

```
cd custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager comfyui-manager
cd comfyui-manager
pip install -r .\requirements.txt
# 安装完成后重启 ComfyUI
```

### 6.2 界面中文翻译（可选）

```
cd custom_nodes
git clone https://github.com/Dontdrunk/ComfyUI-DD-Translation
```

## 7. 常见问题排查（FAQ）

- CUDA 相关报错：

  - 确认安装的是与驱动匹配的 PyTorch CUDA 版本（如 `cu121`）。
  - 避免混装多个 CUDA 轮子；必要时重建虚拟环境并只安装一种。
- `pip install -r requirements.txt` 失败：

  - 先升级工具链：`python -m pip install -U pip setuptools wheel`
  - 若为网络超时，可切换镜像后重试（PyTorch 仍走官方源）。
- Git 克隆失败（SSH）：

  - 改用 HTTPS 链接，或配置 SSH Key 后再试。

完成以上步骤后，即可在浏览器中访问 ComfyUI 并开始使用。
