FROM esquire/esquire-build AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM esquire/esquire-runtime
ENV ASPNETCORE_URLS http://*:5000

# MongoDB Ports
EXPOSE 27017
EXPOSE 28017

# SQL Server port
EXPOSE 1433

# Make directory for mongodb
RUN mkdir -p /data/db

WORKDIR /app

# App port
EXPOSE 5000

COPY --from=build-env /app/out .
COPY run.sh .

VOLUME ["/data/db"]
ENTRYPOINT ["/app/run.sh"]