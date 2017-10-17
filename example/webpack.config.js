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
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
            'configFileName': './example/tsconfig.json'
        }
      }
    ]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          output: {
              comments: false,
              beautify: false,
          }
      })
  ],
};
