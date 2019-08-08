'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const KEY = require('./.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_KEY: KEY.API_KEY
})
