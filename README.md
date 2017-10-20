# Esquire
Policy surveillance project for the Public Health Law Program.

## Getting started
These instructions will get you a copy of the project up and running on your local machine in a Docker container for 
development and testing purposes. This project is written with a .NET Core backend and React frontend. 

### Prerequisites
The only two things you need are the .NET Core SDK with CLI tools, Docker, and the ability to run a shell script or docker
commands. All builds, testing and running are done in a docker container, so installing Node, NPM, etc. are done inside the container.
 
* [Docker](https://docs.docker.com/engine/installation/ "Installing Docker") - latest stable version
* [.NET Core](https://www.microsoft.com/net/download/core#/sdk) - 2.0

### Getting the code
```
$ git clone https://github.com/informaticslab/esquire1.git
$ cd esquire1/esquire1
```

### Things to know before development
We are doing everything, from testing to building to running the code, in a single Docker container. The docker container consists
of SQL Server, MongoDB, .NET Core 2.0 and Node on an Ubuntu container. Since the .NET Core docker images are using Debian, 
and the mssql-server-linux image uses Ubuntu, we had to use two separate environments for build the .NET solution and running
the solution. **You need to set Docker on your machine to use at least 4 GB of memory or it will fail to build the runtime image.**
SQL Server needs 4.0 GB or install. 


## Building the Docker images
Before we can run the container with the app, the docker images of the application need to be built. For your convenience,
there are two different shell scripts: <code>start_docker_dev.sh</code> and <code>start_docker_prod.sh</code>. Each will spin up the docker container
for Development and Production environments respectively. The first time you build either of them, it'll likely take a little 
longer than usual. It has to download dependencies from a variety of sources. You can run them in a terminal like so:
```
$ ./start_docker_dev.sh
```

Each script contains four docker commands. The first three are for building images and the last one is for running the 
final image. It starts by build the build image, this is where the solution for the project will be built. The second command
builds the base runtime image -- this includes everything that is needed for running the solution: MongoDB, SQL Server, Node and 
.NET Core. The third command uses the runtime image created as a base, and copies the built solution to that image, and creates 
a new image. The fourth command runs that final image in a docker container. All together there are three images that are built.

| Image Name | Description | Dockerfile |
| ---------- | ----------- | --------------- |
| esquire/esquire-build | Image used to build the .NET Core solution | dockerfiles/Dockerfile-build
| esquire/esquire-runtime | Image used for running the solution | dockerfiles/Dockerfile-runtime
| esquire/app | Final image that contains esquire/esquire-runtime and the build project solution | dockerfiles/Dockerfile - Development <br> dockerfiles/Dockerfile-prod - Production

## Running the containers
Now, that we've built the image, we can start the development container. The two scripts from above run the docker container 
as the last task. The command is pretty similar for both production and development, with slight additions to the development. 
Each command starts the container with the name esquire with the application running on <http://localhost:5000>, and exposes 
ports to the host machine for each service: 5000 for the application, 27017 for MongoDB and 1433 for SQL Server. 

##### For Development
In addition to starting the application, this command mounts volumes inside the container. The first volume listed allows 
for HMR and live editing without restarting the application for the frontend code. The second volume is for SQL Server, and
mounts the /var/opt/mssql directory from the container to the host machine, allowing for persistant data for the database. 

```
$ docker run -p 5000:5000 -p 27017:27017 -p 1433:1433 -v $(pwd)/ClientApp:/app/ClientApp -v sqlvolume:/var/opt/mssql --name esquire esquire/app
```

##### For Production
```
$ docker run -p 5000:5000 -p 27017:27017 -p 1433:1433 --name esquire esquire/app
```

## Testing
Testing just like building and running is also done in a docker container. 

### Testing frontend code
We use [Jest]( https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/) for testing the React frontend code. 
Jest as the test runner, assertion library, and mock library. Enzyme for making it easier to write React tests. Our frontend
tests are arranged in <code>\_\_tests\_\_</code> directory for each scene, component, etc.

The easiest way to test is by executing the command to test in a an already running container.
Start the development container using the instructions above. You can either run the tests once and exit, or watch the 
code for changes and run tests once jest detects changes. Open a new terminal and use one of the commands below to run 
the tests.

#### Run Once
```
$ docker exec -t esquire jest --coverage
```

#### Watch 
```
$ docker exec -it esquire jest --watchAll
```

### Testing the backend code

## Built With
* React.js
* Docker
* .NET Core 2.0
* Redux
* Webpack
