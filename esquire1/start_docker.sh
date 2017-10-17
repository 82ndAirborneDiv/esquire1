#!/bin/bash

docker build -f dockerfiles/Dockerfile-build -t esquire/esquire-build .
docker build -f dockerfiles/Dockerfile-runtime -t esquire/esquire-runtime .
docker build -f dockerfiles/Dockerfile -t esquire/app .
docker run -p 5000:5000 -p 27017:27017 -p 1433:1433 --name esquire esquire/app
