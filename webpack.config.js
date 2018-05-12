const path = require('path');

module.exports = {
    entry: './src/core.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'core.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
};