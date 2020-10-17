const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.join(__dirname,"src"),
    mode: "development",
    entry: "./index.js",
    output : {
        filename : "[name].[contenthash].js",
        path : path.join(__dirname,"dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template : "./index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns : [
                {
                    from : path.join(__dirname,"src","favicon.ico"),
                    to: path.join(__dirname,"dist")
                }
            ]
        })
    ],
    module : {
        rules : [
            {
                test: /\.css$/,
                use :  ["style-loader","css-loader"]
            },
            {
                test : /\.(ttf)$/,
                use : ["file-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
}