#!/bin/bash
echo "=======构建镜像======"
docker build -t vue3lab .

echo "=======结束并删除容器====="
docker stop vue3labctr; docker rm vue3labctr

echo "=======启动容器======"
docker run -d -t vue3labctr -p 80:80 vue3lab
