const path = require('path');

module.exports = {
    port: 4000,
    paths: {
        'public': path.resolve(__dirname, '../public'),
        'dist': path.resolve(__dirname, '../dist'),
        'app': path.resolve(__dirname, '../app'),
        'root': path.resolve(__dirname, '../')
    },
    dirs: {
        'public': 'public',
        'dist': 'dist'
    },
    jsBundleName: '[name]-[hash].bundle.js',
    cssBundleName: '[name]-[hash].css',
    sortChunks(chunks) {
        return (a,b) => {
            return chunks.indexOf(a.names[0]) - chunks.indexOf(b.names[0])
        }
    }
};
