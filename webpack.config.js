/* eslint-env node */

const fs = require("fs");
const webpack = require("webpack");

module.exports = {
    entry: fs.readdirSync("./tests").map((s) => `./tests/${s}`),
    output: {
        path: __dirname,
        filename: "tests.js",
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
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        hot: true,
        port: 8080,
    },
};
