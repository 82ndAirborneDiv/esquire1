#!/bin/bash

export SQLSERVR_SA_PASSWORD=1qazXSW@.

/opt/mssql/bin/sqlservr --accept-eula --reset-sa-password & dotnet run -c Debug
