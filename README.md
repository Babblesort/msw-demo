# Using Mock Service Worker for Unit Testing

## Purpose

This repo exists as an example of using Mock Service Worker (MSW) to improve unit tests of components that make API calls to fulfill their purpose.

## master branch

Check out the `master` branch to see the example making use of MSW to mock the API at the network layer.

## traditional-mocking branch

Check out the `traditional-mocking` branch to see the example using traditional mocking techniques to mock the API at the service layer.

## Startup Scripts

### Start Jest Test Run

In a terminal enter `npm t` to start a Jest test run.

### Start Sample API

A working API has been provided using the `json-server` package to experience the application running against a functioning back end.

In a terminal enter `npm run api` to start the sample server.

### Start Example App

In a terminal enter `npm start` to launch the msw-demo application. If the sample api is not running the app will render an error message. If the sample API has been started a list of three tasks matching those found in `./src/api/db.json` will be returned by the `json-server` api and rendered to the screen.

### Start Example App Using MSW At Runtime

In a terminal enter `npm run start:msw` to launch the msw-demo application with MSW mocking enabled. The app will render a list of two tasks corresponding to the `mockTasks` found in `./src/api-mocks/handlers`.

## Further Reading

- [MSW Documentation](https://mswjs.io/docs/)
- [Kent C. Dodds Article Suggesting Use of MSW](https://kentcdodds.com/blog/stop-mocking-fetch)
