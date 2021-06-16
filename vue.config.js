const path = require('path')

module.exports = {
  // publicPath: '/wow-build/',
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/assets/styles/imports.scss'),
      ]
    },
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/sprite.svg'
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  }
}
