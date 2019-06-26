# Local Deployment

These steps describe how you can deploy your app locally in production mode if you do not want to deploy your app online for free (see [Deployment](./DEPLOYMENT.md)).

## Requirements

* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Deploy Locally

1. Set the environment variable `NODE_ENV` to `production`
    * macOS/Linux: `export NODE_ENV=production` (check with `echo $NODE_ENV%`)
    * Windows: `set NODE_ENV "production"` (check with `echo %NODE_ENV%`)
2. Configure the backend host for the Vue.js production build by copying the example environment file: `cp client/.env.sample client/.env` (Heroku uses port 5000 by default)
3. Install dependencies and build the minified Vue.js production assets via `npm install` in the root directory `group-00-web` (study the package.json *postinstall* script)
4. [Run the Heroku app locally](https://devcenter.heroku.com/articles/heroku-local) via `heroku local`
