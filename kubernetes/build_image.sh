#!/bin/bash

set -ex
eval $(minikube docker-env)
export DOCKER_REG="localhost:5000/"
export DOCKER_TAG=":latest"

docker image rm localhost:5000/microservices/service-1 --force
docker image rm localhost:5000/microservices/service-2 --force

docker-compose build --force-rm --pull

docker tag localhost:5000/microservices/service-1 localhost:5000/microservices/service-1:latest
docker tag localhost:5000/microservices/service-2 localhost:5000/microservices/service-2:latest