'use strict'
// Template version: 1.2.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/login':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/login': '/login'
          }
      },
      '/uplodimg':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/img': '/img'
          }
      },
      '/deleteimg':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/deleteimg': '/deleteimg'
          }
      },
      '/saveblog':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/saveblog': '/saveblog'
          }
      },
      '/getallblogs':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/getallblogs': '/getallblogs'
          }
      },
      '/getpostedblogs':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/getpostedblogs': '/getpostedblogs'
          }
      },
      '/getdraftblogs':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/getdraftblogs': '/getdraftblogs'
          }
      },
      '/deleteblog':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/deleteblog': '/deleteblog'
          }
      },
      '/setuserinformation':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/setuserinformation': '/setuserinformation'
          }
      },
      '/getuserinformation':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/getuserinformation': '/getuserinformation'
          }
      },
      '/changeblogstate':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/changeblogstate': '/changeblogstate'
          }
      },
      '/addgithubproject':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/addgithubproject': '/addgithubproject'
          }
      },
      '/gettag':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/gettag': '/gettag'
          }
      },
      '/getblogdetils':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/getblogdetils': '/getblogdetils'
          }
      },
      '/savetag':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/savetag': '/savetag'
          }
      },
      '/deletetag':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/deletetag': '/deletetag'
          }
      },
      '/getgithubproject':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/getgithubproject': '/getgithubproject'
          }
      },
      '/deletegithubproject':{
          target:'http://127.0.0.1:30003',
          changeOrigin: true,
          pathRewrite: {
            '^/deletegithubproject': '/deletegithubproject'
          }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8888, // can be overwritten by process.env.HOST, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'admin',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
