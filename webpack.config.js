const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname + "/dist")
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /(node_modules|dist)/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
}
