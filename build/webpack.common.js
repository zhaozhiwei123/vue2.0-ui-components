const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: "./main.js",
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, '../src')
                ],
                options: {
                    cacheDirectory: true//缓存
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html',
            cache: false,
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true,
            },
        }),
        new VueLoaderPlugin()
    ]
}