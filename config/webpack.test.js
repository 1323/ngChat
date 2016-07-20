const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const config = require('./config');

module.exports = webpackMerge(commonConfig, {
    entry: null,
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin([config.dirs.public, config.dirs.dist], {
            root: config.paths.root,
            verbose: true
        })
    ]
});