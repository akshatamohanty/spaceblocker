const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js')
var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    entry: {
        bootstrap: bootstrapConfig,
        app:  './src/entry.js'
    },
    output: {
/*        path: __dirname + "/dist",
        filename: "app.bundle.js"*/
        filename: '[name].js',
        path: __dirname + '/build',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ],
        loaders: [
            { test: /\.woff2$/, loader: 'url-loader?limit=1000000' },
            { test: /\.eot$/, loader: 'file-loader' },
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Space Blocker',
            minify: {
                collapseWhitespace: false
            },  
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Space Blocker',
            minify: {
                collapseWhitespace: false
            },  
            template: './src/templates/tablePane.html',
            filename: 'templates/tablePane.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/images', to: './images' },
        ]),
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          nv: 'nvd3'
        })
    ]
};