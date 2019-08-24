const path = require('path')
const htmlWebpackPlugin = require('./html-conf')
const entry = require('./main-conf')

module.exports = (mode, env) => {
  const { getCssLoader, getSassLoader, getLessLoader, getFontOptions, getImgOptions } = require('./rules-conf')(mode, env)

  return {
    context: path.resolve(__dirname, '..'),
    entry,
    module: {
      rules: [
        {
          test: /\.[t|j]sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.module\.css$/,
          use: getCssLoader(true)
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: getCssLoader()
        },
        {
          test: /\.module\.s[ac]ss$/,
          use: getSassLoader(true)
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module\.s[ac]ss$/,
          use: getSassLoader()
        },
        {
          test: /\.module\.less$/,
          use: getLessLoader(true)
        },
        {
          test: /\.less$/,
          exclude: /\.module\.less$/,
          use: getLessLoader()
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
      extensions: [ '.js', '.jsx', '.tsx', '.ts', '.json' ],

      alias: {
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
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -20,
            chunks: 'all',
          },
        },
      },
    },

    plugins: [ ...htmlWebpackPlugin ],
  }
}
