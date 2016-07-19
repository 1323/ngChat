const path = require('path');

const config = {
    port: 4000,
    paths: {
        public: path.combine(__dirname, 'public'),
        dist: path.combine(__dirname, 'dist'),
        app: path.combine(__dirname, 'app');
    }
};

module.export config;