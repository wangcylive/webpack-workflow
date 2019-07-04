const { getEnv } = require('./env.conf')
const { getAssetsPath } = require('./path.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const localIdentName = (getEnv().isDev ? '[local]' : '') + '_[hash:base64:8]'

const { isProd } = getEnv()

function getLoader (type, option) {
  const loader = type
  const options = Object.assign({}, option, {
    sourceMap: true
  })
  return {
    loader,
    options
  }
}

const limit = 5000

const cssLoader = getLoader('css-loader')

const cssLoaderModule = getLoader('css-loader', {
  modules: {
    localIdentName
  },
  onlyLocals: false
})

const vueStyleLoader = {
  loader: 'vue-style-loader'
}
const styleLoader = getLoader('style-loader')
const postcssLoader = getLoader('postcss-loader')
const sassLoader = getLoader('sass-loader', {
  data: '@import "~@/style/include";'
})

const cssUse = [ postcssLoader ]
const sassUse = [ postcssLoader, sassLoader ]

module.exports = {
  getCssLoader (module) {
    const use = [ module ? cssLoaderModule : cssLoader, ...cssUse ]

    use.unshift(isProd ? MiniCssExtractPlugin.loader : vueStyleLoader)

    return use
  },
  getSassLoader (module) {
    const use = [ module ? cssLoaderModule : cssLoader, ...sassUse ]
    if (isProd) {
      use.unshift(MiniCssExtractPlugin.loader)
    } else {
      use.unshift(vueStyleLoader)
    }

    return use
  },
  getFontOptions () {
    const name = getAssetsPath('font/[name]' + (isProd ? '.[hash]' : '') + '.[ext]')
    return {
      publicPath: (url) => {
        if (isProd) {
          return url.replace('assets/', '../')
        }
        return url
      },
      limit,
      name
    }
  },
  getImgOptions () {
    const name = getAssetsPath('img/[name]' + (isProd ? '.[hash]' : '') + '.[ext]')
    return {
      publicPath: (url) => {
        if (isProd) {
          return url.replace('assets/', '../')
        }
        return url
      },
      limit,
      name
    }
  },
  localIdentName
}
