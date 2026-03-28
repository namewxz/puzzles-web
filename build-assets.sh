#!/bin/bash
set -e

# 安装 Podman（Vercel 环境支持）
apt-get update && apt-get install -y podman

# 构建图标容器
podman build -t build-icons -f Docker/build-icons.Dockerfile .
podman build -t build-emcc -f Docker/build-emcc.Dockerfile .

# 生成所有资源文件（关键！修复所有模块缺失报错）
podman run --rm \
  -v ./puzzles:/app/puzzles:ro \
  -v ./src/assets:/app/assets \
  build-icons

podman run --rm \
  -v ./puzzles:/app/puzzles:ro \
  -v ./src/assets:/app/assets \
  build-emcc
