# Server – ExpressJS Backend

This [ExpressJS](https://expressjs.com/) template provides the basic infrastructure for a JSON API with MongoDB persistency with [Mongoose](https://mongoosejs.com/).

* [FAQ](docs/FAQ.md)
* [Troubleshooting](docs/TROUBLESHOOTING.md)

## Requirements

* [Git](https://git-scm.com/) (v2)
* [Nodejs](https://nodejs.org/en/) (v10)
* [MongoDB](https://www.mongodb.com/) (v4) must be running locally on port 27017
* [Postman](https://www.getpostman.com/downloads/) (v7) for testing

## Project setup

Installs all project dependencies specified in [package.json](./package.json).

```bash
npm install
```

## Start the server with auto-restarts for development

Automatically restarts your server if you save any changes to local files.

```bash
npm run dev
```

## Start the server

```bash
npm start
```

## Run the Postman Tests

Requires a running server.

```bash
npm test
```

## Postman Tests

* You can import the Postman collection from [tests/server.postman_collection.json](./tests/server.postman_collection.json)
* [Extracting data from responses and chaining requests](http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/)
* For the final submission, export the Postman collection into `tests/api-tests.postman.json` and make sure `npm test` completes successfully.

> Remember to **export and commit** any test changes back to `tests/server.postman_collection.json` and make sure `npm test` succeeds for your final submission!

## Debugging with VSCode

Set a breakpoint and click *Debug > Start Debugging*

> Learn more in the [VSCode Debugging Docs](https://code.visualstudio.com/docs/editor/debugging).
