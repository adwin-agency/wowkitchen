const path = require('path')

module.exports = {
  assetsDir: 'assets',
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    proxy: 'http://wowkitchen.ru'
  },
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
        spriteFilename: 'assets/img/sprite.svg'
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  }
}
