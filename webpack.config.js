var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        app: "./src/js/app.js",
        services: "./src/js/services.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    resolve: { extensions: [".js", ".ts"] },
    watch: true,
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    knownHelpersOnly: false,
                    helperDirs: [path.join(__dirname, 'hbs-helpers')],
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.hbs',
            data: require('./data/index.json'),
            chunks: ['app'],
            filename: 'index.html' //will be in dist folder
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Services',
            myPageHeader: 'Hello Services',
            template: './src/services.hbs',
            data: require('./data/services.json'),
            chunks: ['services'],
            filename: 'services.html' //will be in dist folder
        })
    ]
}