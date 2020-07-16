/* eslint-env node */
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: fs.readdirSync("./tests").map((s) => `./tests/${s}`),
    output: {
        path: __dirname,
        filename: "tests.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.test.js/,
                use: "mocha-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            filename: "index.html",
        }),
    ],
    devServer: {
        hot: true,
        port: 8080,
    },
};
