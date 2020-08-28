const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpackBaseConf = require('./webpack.common')
const { production } = require('./env-conf')
const { getAssetsPath } = require('./path-conf')

module.exports = (env) => {
  const publicPath = '/'

  const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: getAssetsPath(production, 'css/layout.[contenthash].css'),
      chunkFilename: getAssetsPath(production, 'css/[id].[contenthash].css'),
    }),
  ]

  if (env.analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return merge(webpackBaseConf(env), {
    optimization: {
      minimizer: [new TerserJsPlugin({}), new OptimizeCssAssetsPlugin({})],
    },

    output: {
      path: path.resolve('./dist'),
      publicPath,
      filename: getAssetsPath('js/[name].[chunkhash].js'),
      chunkFilename: getAssetsPath('js/[name].[chunkhash].js'),
    },

    devtool: 'none',

    plugins,
  })
}
