/* eslint-env node */
const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: fs.readdirSync("./tests").map((s) => `./tests/${s}`),
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
    },
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        hot: true,
        port: 8080,
    },
};
