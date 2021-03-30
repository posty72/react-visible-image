const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: p("./src/app.tsx"),
    output: {
        filename: "app.[hash].js",
        path: p("./build/"),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: p("./tsconfig.json"),
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./example/index.html",
        }),
    ],
};

function p(f) {
    return path.resolve(__dirname, f);
}
