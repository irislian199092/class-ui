const nodeExternals = require('webpack-node-externals');
const path = require('path');

let configureWebpack = {};

configureWebpack.externals = [
  {
    vue: 'vue'
  },
  nodeExternals(),
  nodeExternals({
    modulesDir: path.resolve(__dirname, 'node_modules')
  })
];

module.exports = {
  publicPath: '',
  outputDir: 'lib',
  assetsDir: '',
  css: {
    extract: true,
    sourceMap: false
  },
  // configureWebpack,
  // chainWebpack(webpackConfig) {
  //   webpackConfig.module
  //     .rule('fonts')
  //     .use('url-loader')
  //     .tap(options => Object.assign(options, { limit: 10 }));
  // }
}
