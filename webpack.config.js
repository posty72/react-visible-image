const path = require("path");
const package = require("./package.json");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname + "/dist"),
        library: package.name,
        libraryTarget: "umd",
    },
    externals: {
        react: "react",
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /(node_modules|dist)/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    optimization: {
        minimize: true,
    },
};
