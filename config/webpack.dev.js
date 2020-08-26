const path = require('path')
const { merge } = require('webpack-merge')
const packageJson = require('../package')
const webpackBaseConf = require('./webpack.common')
const internalIp = require('internal-ip')
const serverPort = packageJson.serverPort

// 代理服务器
const proxyServer = '/api'

module.exports = (env) => {
  return merge(webpackBaseConf(env), {
    output: {
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js',
    },

    devtool: 'eval-source-map',

    devServer: {
      contentBase: path.resolve(__dirname, '../src'),
      compress: true,
      port: serverPort,
      historyApiFallback: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      proxy: {
        '/api': {
          target: proxyServer,
          changeOrigin: true,
        },
      },
    },
  })
}

console.log(`start ${packageJson.name} server:
http://localhost:${serverPort}
http://${internalIp.v4.sync()}:${serverPort}
`)
