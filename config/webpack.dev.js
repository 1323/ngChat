const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const commonConfig = require('./webpack.common.js');
const config = require('./config');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: config.paths.public
    },
    tslint: { failOnHint: false },
    devServer: {
        contentBase: config.paths.public,
        outputPath: config.paths.public,
        historyApiFallback: true,
        compress: true,
        inline: true,
        port: config.port,
        stats: {colors: true}
    },
    plugins: [
        new OpenBrowserPlugin({
            url: `http://localhost:${config.port}`
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});