var path = require('path');
var webpack = require('webpack');

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
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss']
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    postcss: function (webpack) {
        return [
            require('postcss-import')({ addDependencyTo: webpack }),
            require('precss')(),
            require('autoprefixer')({ browsers: ['last 2 versions'] })
        ];
    }

};
