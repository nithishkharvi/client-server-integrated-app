# Client-Server Integrated App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Folder Structure

```
.gitignore
client/
|-- angular.json
|-- package.json
|-- proxy.conf.json
|-- public/
|-- README.md
|-- src/
|   |-- app/
|       |-- app-routing.module.ts
|       |-- app.component.html
|       |-- app.component.scss
|       |-- app.component.spec.ts
|       |-- ...
|   |-- index.html
|   |-- main.ts
|   |-- styles.scss
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.spec.json
package.json
server/
|-- home/
|   |-- home.js
|-- package.json
|-- server-runner.js
```

## Development server

To start the development server, run:

```bash
npm start
```

This will concurrently start both the client and server in development mode.

## Scripts

- `start`: Runs the `start:dev` script.
- `start:dev`: Concurrently runs the client and server in development mode.
- `start:server`: Starts the server in development mode using `nodemon`.
- `start:client`: Starts the Angular client with a proxy configuration.
- `start:prod`: Starts the server in production mode.
- `build:client`: Builds the Angular client for production and outputs the files to the `server/public` directory.

## Building

To build the project, run:

```bash
npm run build:client
```

This will compile the Angular client and store the build artifacts in the `server/public` directory.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.