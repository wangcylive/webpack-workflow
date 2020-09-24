const path = require('path')
const htmlWebpackPlugin = require('./html-conf')
const entry = require('./main-conf')
const { isProduction } = require('./env-conf')

module.exports = (env) => {
  const { getCssLoader, getSassLoader, getLessLoader, getFontOptions, getImgOptions } = require('./rules-conf')(env)

  const defineEnv = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  }
  if (env) {
    Object.entries(env).forEach(([key, value]) => {
      defineEnv[key] = JSON.stringify(value)
    })
  }

  const alias = {
    '@': path.resolve(__dirname, '../src'),
  }
  if (!isProduction) {
    Object.assign(alias, {
      'react-dom': '@hot-loader/react-dom',
    })
  }

  return {
    context: path.resolve(__dirname, '..'),
    mode: process.env.NODE_ENV,
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
          use: getCssLoader(true),
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: getCssLoader(),
        },
        {
          test: /\.module\.s[ac]ss$/,
          use: getSassLoader(true),
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module\.s[ac]ss$/,
          use: getSassLoader(),
        },
        {
          test: /\.module\.less$/,
          use: getLessLoader(true),
        },
        {
          test: /\.less$/,
          exclude: /\.module\.less$/,
          use: getLessLoader(),
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
      alias,
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
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
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|history|redux|react-redux|redux-thunk|axios)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: -1
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

    plugins: [...htmlWebpackPlugin],
  }
}
