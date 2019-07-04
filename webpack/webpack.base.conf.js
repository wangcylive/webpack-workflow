const path = require('path')
const { getCssLoader, getSassLoader, getFontOptions, getImgOptions } = require('./rules')
const entryPath = require('./entry')
const htmlWebpackPlugin = require('./htmlWebpackPlugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (src) {
  return path.resolve(__dirname, '..', src)
}

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: entryPath,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: getCssLoader(true)
          },
          {
            use: getCssLoader()
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: getSassLoader(true)
          },
          {
            use: getSassLoader()
          }
        ]
      },
      {
        // 处理图片文件
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: 'url-loader',
        options: getImgOptions()
      },
      {
        // 处理字体文件
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: getFontOptions()
      },
    ]
  },

  resolve: {
    extensions: [ '.js', '.vue', '.json' ],

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },

  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -20,
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new VueLoaderPlugin()
  ].concat(htmlWebpackPlugin)
}
