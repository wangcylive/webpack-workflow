const ExtractTextPlugin = require('mini-css-extract-plugin')
const { isProduction } = require('./env-conf')
const { getAssetsPath } = require('./path-conf')

module.exports = (mode, env) => {
  const isProd = isProduction(mode)

  // 文件内联大小限制
  const fileInlineLimit = 4000

  // css module name设置
  let localIdentName = '_[hash:base64:8]'
  if (!isProd) {
    localIdentName = '[path][name]__[local]'
  }

  function getLoader (type, option) {
    const loader = `${type}-loader`
    const options = Object.assign({}, option, {
      sourceMap: true
    })
    return {
      loader,
      options
    }
  }

  const cssLoader = getLoader('css')
  const cssModuleLoader = getLoader('css', {
    modules: {
      localIdentName
    }
  })
  const styleLoader = getLoader('style')
  const postcssLoader = getLoader('postcss')
  const sassLoader = getLoader('sass')
  const lessLoader = getLoader('less')

  const cssUse = [ postcssLoader ]
  const sassUse = [ postcssLoader, sassLoader ]
  const lessUse = [ postcssLoader, lessLoader ]

  const lastLoader = isProd ? ExtractTextPlugin.loader : styleLoader

  return {
    getCssLoader (modules) {
      const use = [ modules ? cssModuleLoader : cssLoader, ...cssUse ]

      return [ lastLoader, ...use ]
    },
    getSassLoader (modules) {
      const use = [ modules ? cssModuleLoader : cssLoader, ...sassUse ]

      return [ lastLoader, ...use ]
    },
    getLessLoader (modules) {
      const use = [ modules ? cssModuleLoader : cssLoader, ...lessUse ]

      return [ lastLoader, ...use ]
    },
    getFontOptions () {
      const name = getAssetsPath(mode,`font/[name]${isProd && '.[hash]'}.[ext]`)
      return {
        limit: fileInlineLimit,
        name
      }
    },
    getImgOptions () {
      const name = getAssetsPath(mode,`img/[name]${isProd && '.[hash]'}.[ext]`)
      return {
        limit: fileInlineLimit,
        name
      }
    }
  }
}
