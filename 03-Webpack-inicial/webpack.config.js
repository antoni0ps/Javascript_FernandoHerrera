const HtmlWebpack = require('html-webpack-plugin');


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
                use: ['style-loader', 'css-loader'],
            },
        ]
    },


    optimization: {

    },

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            template: 'src/index.html',
        }),
    ],
}