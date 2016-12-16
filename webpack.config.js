const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'latest', 'react-hmre'],
          plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: require('path').resolve('./dist')
      }
    ]
  }
};