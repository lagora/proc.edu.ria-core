const path = require('path');

module.exports = {
    entry: './src/core.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'core.js',
        library: 'library',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    target: 'node'
};