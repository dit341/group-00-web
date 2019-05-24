# Express Template

This [ExpressJS](https://expressjs.com/) template provides the basic infrastructure for an Express application.

* [Deployment](docs/DEPLOYMENT.md)
* [Troubleshooting](docs/TROUBLESHOOTING.md)

## Requirements

* [Git](https://git-scm.com/)
* [Nodejs](https://nodejs.org/en/) (v10) with [NPM](https://www.npmjs.com/)
* [MongoDB](https://www.mongodb.com/) (v4) must be running locally

## Clone the Repository

```bash
# Without Gitlab Registration
git clone https://gitlab.com/dit341/express-template.git
# With Gitlab Registration
git clone git@gitlab.com:YOUR_USERNAME/express-template.git

# Change into the template directory
cd express-template
```

## Install the Dependencies

```bash
npm install
```

## Start the Server

```bash
npm start
```

## Start the Server with Auto-Restarts

Automatically restarts your server if you make any changes to local files.

```bash
npm run dev
```

## Run the Postman Tests

Requires a running server.

```bash
npm test
```

## Postman Tests

[Postman apps](https://www.getpostman.com/apps)

* You can import the Postman collection from `tests/api-tests.postman.json`
* [Extracting data from responses and chaining requests](http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/)
* For the final submission, export the Postman collection into `tests/api-tests.postman.json` and make sure `npm test` completes successfully.

## Debugging with VSCode

Set a breakpoint and click *Debug > Start Debugging*

> Learn more in the [VSCode Debugging Docs](https://code.visualstudio.com/docs/editor/debugging).
