var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: {
    main: SRC_PATH + '/main.js'
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel!eslint-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=819200'
      },
      {   test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap'
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass?sourceMap"
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: ROOT_PATH + '/index.html',
      title: 'dist',
      inject: true
    })
  ],
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-runtime']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
}
