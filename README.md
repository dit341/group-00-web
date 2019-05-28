# Backend and Frontend Template

* [Server](./server/README.md) backend
  * [FAQ](./server/docs/FAQ.md)
  * [Troubleshooting](./server/docs/TROUBLESHOOTING.md)
* [Client](./client/README.md) frontend
* [Deployment](./docs/DEPLOYMENT.md)

## Requirements

The version numbers in brackets indicate the tested versions but feel free to use more recent versions.
You can also use alternative tools if you know how to configure them (e.g., Firefox instead of Chrome).

* [Git](https://git-scm.com/) (v2) => [installation instructions](https://www.atlassian.com/git/tutorials/install-git)
  * > **Windows users**: Use the [Git Bash](https://www.atlassian.com/git/tutorials/git-bash) shell from your Git installation or the Bash shell from the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run **all** shell commands for this project!
* [Chalmers GitLab](https://git.ita.chalmers.se/) => Login with your **Chalmers CID** (contact [support@chalmers.se](mailto:support@chalmers.se) if you don't have one)
  * DIT341 course group: https://git.ita.chalmers.se/courses/dit341
  * [Setup SSH key with Gitlab](https://docs.gitlab.com/ee/ssh/)
    * Create an SSH key pair `ssh-keygen -t ed25519 -C "email@example.com"` (skip if you already have one)
    * Add your public SSH key to your Gitlab profile: https://git.ita.chalmers.se/profile/keys
  * Checkout the [Backend-Frontend](https://git.ita.chalmers.se/courses/dit341/group-00-web) template `git clone git@git.ita.chalmers.se:courses/dit341/group-00-web.git`
  * Checkout the [Android](https://git.ita.chalmers.se/courses/dit341/group-00-android) template `git clone git@git.ita.chalmers.se:courses/dit341/group-00-android.git`
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
