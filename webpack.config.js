const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname,'build'),
        filename: 'main.[contenthash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({template: resolve(__dirname,
                './src/index.html')}),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader?name=[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(mp3|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
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