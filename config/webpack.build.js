const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const config = require('./config');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: config.paths.dist
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true,
                unsafe: true,
                drop_console: true,
                keep_fargs: false
            },
            comments: false
        }),
        new webpack.optimize.DedupePlugin()
    ]
});