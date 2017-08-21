const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const os = require('os');
const fs = require('fs');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
{
  entry: {bundle: './src/ClientApp.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      static: path.resolve(__dirname, './static'),
      widgets: path.resolve(__dirname, './src/widgets')
    },
    extensions: [
      '.js', '.jsx', '.css', '.scss'
    ]
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets:[ 'env', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'style-loader',
            'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap&sourceComments'
          ]})
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{loader: "css-loader"}, {loader: "sass-loader"}]
          })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
    // ,
    // new CopyWebpackPlugin([
    //   { from: 'src/static/', to: 'static'},
    //   { from: 'src/index.html', to: 'index.html'}
    // ])
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new UglifyEsPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
},
{
  entry: {serverBundle: './server.js'},
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      static: path.resolve(__dirname, './static'),
      widgets: path.resolve(__dirname, './src/widgets')
    },
    extensions: [
      '.js', '.jsx'
    ]
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets:[ 'env', 'react']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: 'ignore-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
            loader: 'file-loader?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]',
            options: {
              emitFile: false
            }
          },
          {
            loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          }
        ]
      }
    ]
  }
}];
