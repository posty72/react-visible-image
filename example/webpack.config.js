const webpack = require('webpack');

module.exports = {
    entry: './example/src/app.tsx',
    output: {
        filename: './example/build/app.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'example/tsconfig.json'
                }
            }
        ]
    }
};
