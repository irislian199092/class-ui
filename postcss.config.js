module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // autoprefixer: {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    // 'postcss-px2rem-exclude': {
    //   remUnit: 100,
    //   exclude: /node_modules/
    // }
    'postcss-px-to-viewport': {
      viewportWidth: 1366,
      viewportHeight: 733,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 0.5,
      mediaQuery: false
    },
    'postcss-viewport-units': {}
  }
}
