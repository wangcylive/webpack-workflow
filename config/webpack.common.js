const path = require('path')
const htmlWebpackPlugin = require('./html-conf')
const entry = require('./main-conf')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env) => {
  const defineEnv = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  }
  if (env) {
    Object.entries(env).forEach(([key, value]) => {
      defineEnv[key] = JSON.stringify(value)
    })
  }

  const { getCssLoader, getSassLoader, getLessLoader, getFontOptions, getImgOptions } = require('./rules-conf')(
    env
  )

  return {
    context: path.resolve(__dirname, '..'),
    entry,
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: getCssLoader(true),
            },
            {
              use: getCssLoader(),
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: getSassLoader(true),
            },
            {
              use: getSassLoader(),
            },
          ],
        },
        {
          test: /\.less$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: getLessLoader(true),
            },
            {
              use: getLessLoader(),
            },
          ],
        },
        {
          // 处理图片文件
          test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
          loader: 'url-loader',
          options: getImgOptions(),
        },
        {
          // 处理字体文件
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: getFontOptions(),
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.vue', '.json'],

      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, '../src'),
      },
    },

    stats: {
      modules: false,
      children: false,
    },

    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
      splitChunks: {
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router|axios)[\\/]/,
            name: 'vue',
            chunks: 'all',
            priority: -1,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -2,
            chunks: 'all',
          },
        },
      },
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          ...defineEnv,
        },
      }),
      new VueLoaderPlugin(),
      ...htmlWebpackPlugin,
    ],
  }
}
