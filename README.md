<p align="center">
  <img src="/frontend/src/assets/logo.svg"" width="200" />
</p>

# Be The Hero 

## Overview

The main objective of this project is to provide a way to help Non-Governmental Organisation find Heroes to help in their causes.

## Setting up


### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/get-npm)
- [Expo](http://expo.io) - Open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.


### Dependencies

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [Sqlite3](https://github.com/mapbox/node-sqlite3) - Sqlite client for Node.js
- [Nodemon](https://nodemon.io/) - monitor for any changes in code and automatically restart server
- [React Native](https://reactnative.dev/) - A framework for building native apps using React.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- [Jest](https://jestjs.io/) - Testing framework
- [Supertest](https://github.com/visionmedia/supertest) - Library for testing node.js HTTP servers

## Installing

All you need to do is run `npm i` at the root of the project in order to install the dependencies.
- backend -
    Run the migrations in order to initialize the database
  ```
  npx knex migrate:latest
  ```
- mobile -
    Before starting, make sure to change the baseURL address at the src/services/api.js to point to your backend IP or URL

## Starting

Run `npm start` in backend first then run `npm start` in frontend and/or mobile.

