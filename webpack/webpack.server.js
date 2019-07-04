const { development } = require('./env.conf')
const serverPort = require('../package').serverPort || 80
const hostIp = require('./hostIp')
process.env.NODE_ENV = development

const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBaseConf, {
  mode: development,

  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../src'),

    // 启用 gzip 压缩
    compress: true,

    port: serverPort,
    // inline: true,
    historyApiFallback: true,
    disableHostCheck: true,

    host: '0.0.0.0',

    stats: {
      modules: false
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(development)
      }
    })
  ]
})

console.log(`start server:
http://localhost:${serverPort}
http://${hostIp()}:${serverPort}
`)
