const HtmlWebpackPlugin = require('html-webpack-plugin')
const pluginName = 'HtmlWebpackInsertBodyAfter'

class HtmlWebpackInsertBodyAfter {
  constructor (options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        pluginName,
        (data, cb) => {
          data.html = data.html.replace(/<\/body>/, (match) => {
            return this.options.body || '' + match
          })
          cb(null, data)
        }
      )
    })
  }
}

module.exports = HtmlWebpackInsertBodyAfter
