const { production } = require('./env.conf')
process.env.NODE_ENV = production

const buildEnv = process.argv[4].split('=')[1]

const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpackBaseConf = require('./webpack.base.conf')

const {
  getAssetsPath,
} = require('./path.conf')

module.exports = (env) => {
  const publicPath = env === 'production' ? './' : '/'

  return webpackMerge(webpackBaseConf, {
    output: {
      path: path.resolve('./dist'),
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
          NODE_ENV: JSON.stringify(buildEnv),
        },
      }),
      new CleanWebpackPlugin({}),
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
      ])
    ],
  })
}
