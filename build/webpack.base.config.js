const path = require('path')
const vueConfig = require('./vue-loader.config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'es6-promise',
      'es6-object-assign',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync'
    ]
  },
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'public': resolve('public'),
      '@': resolve('src'),
      'api': resolve('src/resource')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: vueConfig
        }]
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'buble-loader',
          options: {
            objectAssign: 'Object.assign'
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }]
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
}
