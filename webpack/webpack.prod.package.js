const { production } = require('./env.conf')
process.env.NODE_ENV = production

const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')
const webpackBaseConf = require('./webpack.base.conf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  getAssetsPath,
} = require('./path.conf')

module.exports = (env, argv) => {
  const publicPath = env === 'production' ? './' : '/'

  const entry = argv.enter

  webpackBaseConf.entry = {}
  webpackBaseConf.plugins = [
    new VueLoaderPlugin()
  ]

  let outPath = entry

  switch (entry) {
    case 'index':
      outPath = 'COCAssist'
      break
    case 'auto-attack':
      outPath = 'AutoAttack'
      break
    case 'search-matches':
      outPath = 'AutoSearchMatches'
      break
  }

  return webpackMerge(webpackBaseConf, {
    entry: {
      'index': `./src/main/${entry}.js`
    },
    output: {
      path: path.resolve(`./dist/${outPath}`),
      publicPath,
      filename: getAssetsPath('js/[name].[chunkhash].js'),
      chunkFilename: getAssetsPath('js/[name].[chunkhash].js'),
    },

    mode: production,

    devtool: 'none',

    stats: {
      modules: false,
      children: false,
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(production),
        },
      }),
      new CleanWebpackPlugin({}),
      new HtmlWebpackPlugin({
        template: `./src/html/${entry}.html`,
        filename: 'index.html',
        chunks: [ 'manifest', 'vendors', 'index' ]
      }),
      new MiniCssExtractPlugin({
        filename: getAssetsPath('css/[name].[contenthash].css'),
        chunkFilename: getAssetsPath('css/[name].[contenthash].css'),
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true,
        },
      }),
      new CopyPlugin([
        {
          from: './src/image/card/**/*',
          to: './assets/card',
          flatten: true
        }
      ]),
      new ZipPlugin({
        path: '../',
        filename: `${outPath}.zip`
      })
    ],
  })
}
