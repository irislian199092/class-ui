
module.exports = {
  publicPath: './',
  outputDir: 'output',
  // configureWebpack: {
  //   devtool: '#source-map',
  //   resolve: {
  //     extensions: ['.js', '.vue', '.json'],
  //     symlinks: false
  //   }
  // },
  lintOnSave: false,
  runtimeCompiler: true,
  // devServer: {
  //   open: true,
  //   port: 9692,
  //   host: localHost,
  //   https: true,
  // },
  // transpileDependencies: [
  //   /@sscui/
  // ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    let originalOptions;
    svgRule.use('file-loader').tap(options => {
      originalOptions = options;
    });
    svgRule.uses.clear();
    svgRule.oneOf('module')
      .resourceQuery(/\?module/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    svgRule.oneOf('normal')
      .use('file-loader')
      .loader('file-loader')
      .options(originalOptions);
  }
}
