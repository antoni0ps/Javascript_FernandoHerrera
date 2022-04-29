const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',

    output: {
        clean: true
    },


    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },


    optimization: {

    },

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            template: 'src/index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.css', //el fullhash es recomendado para el entorno de producción
            ignoreOrder: false
        }),

        new CopyPlugin({

            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        }),
    ],
}