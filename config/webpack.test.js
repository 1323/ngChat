const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common');
const config = require('./config');

module.exports = webpackMerge(commonConfig, {
    entry: {},
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin([config.dirs.public, config.dirs.dist], {
            root: config.paths.root,
            verbose: true
        })
    ]
});