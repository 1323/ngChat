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
        outputPath: config.paths.public,
        historyApiFallback: true,
        compress: true,
        port: config.port
    },
    plugins: [
        new OpenBrowserPlugin({
            url: `http://localhost:${config.port}`
        })
    ]
});