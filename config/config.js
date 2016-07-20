const path = require('path');

const config = {
    port: 4000,
    paths: {
        public: path.join(__dirname, 'public'),
        dist: path.join(__dirname, 'dist'),
        app: path.join(__dirname, 'app'),
        root: __dirname
    },
    dirs: {
        public: 'public',
        dist: 'dist'
    },
    jsBundleName: '[name]-[hash].bundle.js',
    cssBundleName: '[name]-[hash].css'
};

module.export = config;