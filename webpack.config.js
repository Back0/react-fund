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
  vendor: [
    'react',
    'react-dom'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      ROOT_PATH: path.resolve(__dirname),
      SRC_PATH: path.resolve(ROOT_PATH, 'src'),
      DIST_PATH: path.resolve(ROOT_PATH, 'dist'),
      assets: path.resolve(ROOT_PATH, 'src/assets'),
      components: path.join(ROOT_PATH, 'src/components')
    }
  },
  resolveLoader: {
    root: path.join(ROOT_PATH, 'node_modules')
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=819200'
      },
      {
        test: /\.css$/,
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-runtime']
  },
  devServer: {
    port: 9999,
    inline: true,
    progress: true,
    colors: true
  }
};