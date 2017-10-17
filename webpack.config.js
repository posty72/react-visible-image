const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/',
        libraryTarget: 'commonjs-module'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
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
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            output: {
                comments: false,
                beautify: false,
            }
        })
    ]
};
