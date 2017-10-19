#!/bin/bash

export SQLSERVR_SA_PASSWORD=1qazXSW@.

/opt/mssql/bin/sqlservr --accept-eula --reset-sa-password \
    & mongod --fork --logpath /var/log/mongod.log \
    && dotnet run -c Debug
