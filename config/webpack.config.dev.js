var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');
var path = require('path');

var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: publicPath
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', ''],
    root: path.resolve('./src')
  },

  module: {
    preLoaders: [
      {
        test: /\.(js)$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.js$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/,
          /\.scss$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.scss$/,
        include: paths.appSrc,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
    ];
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
