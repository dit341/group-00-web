# Deployment

These steps describe how you can deploy your app online for free (**NO** credit card required).

## Requirements

* Free [mLab](https://mlab.com/) account
* Free [Heroku](https://www.heroku.com/) account
* Installed [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

> All these services have a **free** tier and can be used **WITHOUT** a credit card.

## Setup Hosted MongoDB

1. Sign up for a free [mLab account](https://mlab.com/signup/)
2. Click *Create New* in the *MongoDB Deployments* section
3. Select the AWS *SANDBOX FREE* plan type and click continue
4. Select the *Europe (Ireland) (eu-west-1)* region and click continue
5. Choose a database name and click continue
6. Click *Submit Order*
7. Select the *Users* tab and click *Add database user*
8. Choose a username and password and click *Create*
9. Copy the MongoDB URI shown above including the dbuser and dbpassword you choose! Example: `mongodb://my_db_user:my_super_secure_pw1@ds123456.mlab.com:12345/my-db-name`

Find a more detailed tutorial [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Setting_up_the_MongoDB_database).

## Deploy to Heroku

### Setup

Sign up for a free [Heroku account](https://signup.heroku.com/).

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and follow these steps:

```bash
# Optional app name: heroku apps:create my-app-name --region eu
heroku apps:create --region eu
heroku config:set MONGODB_URI='mongodb://your_user:your_password@ds139278.mlab.com:39278/local_library_production'
heroku config:set NODE_ENV='production'
export API_ENDPOINT="$(heroku apps:info -s  | grep web_url | cut -d= -f2)api"
heroku config:set VUE_APP_API_ENDPOINT=$API_ENDPOINT
```

To set the API_ENDPOINT, you can also manually extract the `web_url` from `heroku apps:info -s`. For example: `API_ENDPOINT=https://aqueous-crag-12345.herokuapp.com/api`

> The app needs to be re-deployed whenever `VUE_APP_API_ENDPOINT` is updated (e.g., when the Heroku app name changed).

### Deploy

```bash
git push heroku master
heroku open
```

### Debugging Heroku

```bash
heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku ps   #Display dyno status
```

## Automatically Deploy to Heroku with Gitlab

This setup automatically deploys the latest version to Heroku after each successful pipeline of the master branch.

1. Open the GitLab settings `Settings > Environment Variables` (e.g., https://git.ita.chalmers.se/courses/dit341/group-00-web/settings/ci_cd)
2. Add the key `HEROKU_APP_NAME` with the value: `Name` of your app visible in the Heroku app settings https://dashboard.heroku.com/apps/your-app-name/settings
3. Add the key `HEROKU_API_KEY` with value: `API Key` of your Heroku account in the Heroku account settings: https://dashboard.heroku.com/account
4. Save variables

> Deployment will only be triggered for the master branch and when both HEROKU keys are configured.

A HelloWorld tutorial can be found here: [Deploy Node.js App with GitLab CI/CD](https://medium.com/@seulkiro/deploy-node-js-app-with-gitlab-ci-cd-214d12bfeeb5)

## Further Readings on Production Deployment

* [Express Tutorial Part 7: Deploying to production](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
* [Vue.js Production Deployment](https://vuejs.org/v2/guide/deployment.html)
