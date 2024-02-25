#!/bin/bash
echo "=======构建镜像======"
docker build -t vue3lab .

echo "=======结束并删除容器====="
docker stop vue3labctr; docker rm vue3labctr

echo "=======启动容器======"
docker run -d -p 80:80 --name vue3labctr vue3lab
