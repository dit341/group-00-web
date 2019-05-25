# client

## Requirements

* [Node.js (v10)](https://nodejs.org/en/)
* Backend running on `http://localhost:3000` (config in `.env`)

## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

* [JavaScript Standard Style](https://standardjs.com/rules-en.html)
* [Are Semicolons Necessary in JavaScript? (8' background explanation)](https://youtu.be/gsfbh17Ax9I)

> The Vue.js community [favors](https://forum.vuejs.org/t/semicolon-less-code-my-thoughts/4229) omitting optional semicolons `;` in Javascript.

## Bootstrap 4 and BootstrapVue

* [BootstrapVue Components](https://bootstrap-vue.js.org/docs/components)
  * [Layout and Grid System](https://bootstrap-vue.js.org/docs/components/layout/)
  * [Link](https://bootstrap-vue.js.org/docs/components/link)
  * [Button](https://bootstrap-vue.js.org/docs/components/button)
  * [Form](https://bootstrap-vue.js.org/docs/components/form)
* [BootstrapVue Online Playground](https://bootstrap-vue.js.org/play/)

> Plain [Bootstrap 4](https://getbootstrap.com/) uses a popular JS library called [jQuery](http://jquery.com/) for dynamic components (e.g., dropdowns). However, using jQuery with Vue is [problematic](https://vuejsdevelopers.com/2017/05/20/vue-js-safely-jquery-plugin/) and therefore we use BootstrapVue here.

## Debug in VSCode with Chrome

Setup: Install the VSCode plugin [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

1. Set a breakpoint in VSCode
2. Serve the client `npm run serve`
3. In the menu: Debug > Start Debugging (F5).

More infos in the [Vuejs Debug Docs](https://vuejs.org/v2/cookbook/debugging-in-vscode.html).

> Chrome will launch with a separate user profile in a temp folder as described in the VSCode [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
