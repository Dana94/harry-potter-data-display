# harry-potter-data-display

> A work-in-progress. I'm using the data from the [Potter API](https://www.potterapi.com/) and [D3.js](https://d3js.org/) to try to make a cool data display with what I have to use.

## Requirements

Create an account at [Potter API](https://www.potterapi.com/) to receive an API key.

You need to create a `.env.js` file in the `/config` folder for the key to go.

Use this code sample for the file, replacing `SUPER_SECRET_KEY` with your own key. Keep both quotation marks around your key.
```javascript
'use strict'
module.exports = {
  API_KEY: '"SUPER_SECRET_KEY"'
}
```
Once that's done, you should be able to access the API.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
