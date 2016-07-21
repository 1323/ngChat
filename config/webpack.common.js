const webpack = require('webpack');
const glob = require('glob-all');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

module.exports = {
    context: config.paths.app,
    entry : {
        'app': './app.js',
        'vendor': './core/vendor.js',
        'styles': glob.sync([
            './core/app.scss',
            './**/**.scss'
            //register 3rd party styles here

        ], { cwd: config.paths.app})
    },
    output: {
        filename: config.jsBundleName,
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        root: config.paths.root,
        modulesDirectories: ['node_modules']
    },
    module : {
        loaders: [
            { test: /\.ts$/, include: /app/, loaders: ['ng-annotate', 'ts'] },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass']) },
            { test: /\.css/, include: /node_modules/, loader: ExtractTextPlugin.extract(['css']) },
            { test: /\.html$/, include: /app/, loader: 'html' },
            { test: /\.json$/, include: /app/, loader: 'json' }
        ],
        preLoaders: [
            { test: /\.ts$/, loader: 'tslint' }
        ]
    },
    tslint: { emitErrors: true },
    plugins: [
        new CleanWebpackPlugin([config.dirs.public, config.dirs.dist], {
            root: config.paths.root,
            verbose: true
        }),
        new ExtractTextPlugin(config.cssBundleName),
        new HtmlWebpackPlugin({
            title: 'ngChat',
            template: 'index.html',
            favicon: 'assets/favicon.ico',
            chunksSortMode: () => ['vendor', 'app', 'style']
        }),
        new CopyWebpackPlugin([
            {from: 'assets'}
        ])
    ]
};