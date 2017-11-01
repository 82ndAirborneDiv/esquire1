FROM esquire/esquire-build AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
COPY package.json ./
RUN dotnet restore
RUN npm install

# Copy everything else and build
COPY . ./
RUN dotnet build -c Debug

# Build runtime image
FROM esquire/esquire-runtime
ENV ASPNETCORE_ENVIRONMENT=Development
ENV NODE_ENV=development
ENV ASPNETCORE_URLS http://*:5000

# SQL Server port
EXPOSE 1433

# For running frontend tests
RUN npm install -g jest

# This is where we'll put the code
WORKDIR /app

# App port
EXPOSE 5000

COPY --from=build-env /app .
COPY ./dockerfiles/run_dev.sh .

ENTRYPOINT ["/bin/bash", "/app/run_dev.sh"]
