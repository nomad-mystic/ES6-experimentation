var path = require('path');
var webpack = require('webpack');
var extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ['./src/js/main.js'] // ,
        // ratefinder: './js/ratefinder.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // Extract css files
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: extractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new extractTextPlugin("[name].css")
    ]

};
