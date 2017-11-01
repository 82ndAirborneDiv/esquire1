#!/usr/bin/env bash
echo "Make sure your Docker setup is set to 4GB of memory. This is needing for installing SQL Server"
docker build -f dockerfiles/Dockerfile-build -t esquire/esquire-build .
docker build -f dockerfiles/Dockerfile-runtime -t esquire/esquire-runtime .
docker build -f dockerfiles/Dockerfile -t esquire/app .
docker run -p 5000:5000 -p 1433:1433 -v $(pwd)/ClientApp:/app/ClientApp -v sqlvolume:/var/opt/mssql --name esquire esquire/app
