Backend and Frontend Template [![Pipeline](https://git.ita.chalmers.se/courses/dit341/group-00-web/badges/master/pipeline.svg)](https://git.ita.chalmers.se/courses/dit341/group-00-web/commits/master)
=========

* [server](./server/README.md) backend
  * [FAQ](./server/docs/FAQ.md)
  * [Troubleshooting](./server/docs/TROUBLESHOOTING.md)
* [client](./client/README.md) frontend
* [Deployment](./docs/DEPLOYMENT.md)

## Getting started

```bash
# Without Gitlab Registration
git clone https://gitlab.com/dit341/express-template.git
# With Gitlab Registration
git clone git@gitlab.com:YOUR_USERNAME/express-template.git

# Change into the template directory
cd group-00-web

# Setup backend
cd server && npm install
npm run dev

# Setup frontend
cd client && npm install
npm run serve
```

> Open the `server` and `client` in separate VSCode windows or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace).
