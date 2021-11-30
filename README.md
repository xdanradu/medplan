# kafka-based-architecture mono-repo with nx

## Prerequisites

### Kafka + zookeeper (localhost:2181)

- Kafka is primarily used to build real-time streaming data pipelines and applications that adapt to the data streams. It combines messaging, storage, and stream processing to allow storage and analysis of both historical and real-time data.
- Apache Kafka is a publish-subscribe based durable messaging system. A messaging system sends messages between processes, applications, and servers. ... Another application may connect to the system and process or re-process records from a topic. The data sent is stored until a specified retention period has passed by. 
- The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds.    
Use config-scripts docker-compose.yml file to start a docker container that connect kafka to zookeeper:
     
     `bash docker-compose -f docker-compose.yml up`
                                      
- MySLQ: localhosT:3036
- PhpMyAdmin: localhost:8081 

### MySQL 
    Source: https://medium.com/@migueldoctor/run-mysql-phpmyadmin-locally-in-3-steps-using-docker-74eb735fa1fc
    
    Commands: 
    
    ```bash
    docker pull mysql:latest
    docker run --name dev-db -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:latest
    ```
   
   If the container has already been created you can start it from docker containers or from command line:
   
   ```bash
   docker container ls
   docker container start <container_id>
   ```
   
   MySQL server will be accessible from any docker image that runs on localhost: 
   DB_HOST=db
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=app-db
   
   You have to manually create a new database with PHPMyAdmin called '???' with a 'users' table 
   (see auth microservice database controller and .env file).
   
### PHPMyAdmin

    ```bash
    docker pull phpmyadmin/phpmyadmin:latest
    docker run --name dev-phpmyadmin -d --link dev-db:db -p 8081:80 phpmyadmin/phpmyadmin
    ```
   
PHPMyAdmin access: http://localhost:8081

Docs
https://medium.com/@pro_ibenjell/how-to-create-a-full-stack-chat-application-using-nx-workspace-and-run-it-in-docker-65afcfe879d0
https://www.youtube.com/watch?v=odOKUGUhgPU
https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65

### Generate service command

```bash 
nx generate @nrwl/nest:service gateway --project messages-api
```

# AdvancedMonorepo

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@advanced-monorepo/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.


