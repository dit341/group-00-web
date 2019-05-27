# Backend and Frontend Template

* [Server](./server/README.md) backend
  * [FAQ](./server/docs/FAQ.md)
  * [Troubleshooting](./server/docs/TROUBLESHOOTING.md)
* [Client](./client/README.md) frontend
* [Deployment](./docs/DEPLOYMENT.md)

## Requirements

* [Git](https://git-scm.com/) (v2)
* [Server Requirements](./server/README.md#Requirements)
* [Client Requirements](./client/README.md#Requirements)

## Getting started

```bash
# Without Gitlab Registration
git clone https://git.ita.chalmers.se/courses/dit341/group-00-web
# With Gitlab Registration
git clone git@git.ita.chalmers.se:courses/dit341/group-00-web.git

# Change into the directory
cd group-00-web

# Setup backend
cd server && npm install
npm run dev

# Setup frontend
cd client && npm install
npm run serve
```

## Visual Studio Code (VSCode)

Open the `server` and `client` in separate VSCode workspaces or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace). Otherwise, workspace-specific settings don't work properly.
