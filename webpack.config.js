const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: resolve(__dirname,'build'),
        filename: 'main.[contenthash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({template: resolve(__dirname,
                './src/timer.html')}),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000
    }
}