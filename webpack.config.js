const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname + '/dist'),
        libraryTarget: 'commonjs-module'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /(node_modules|dist)/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
        ]
    }
};
