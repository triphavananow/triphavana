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
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['app'],
            filename: 'index.html' //will be in dist folder
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Services',
            myPageHeader: 'Hello Services',
            template: './src/services.html',
            chunks: ['services'],
            filename: 'services.html' //will be in dist folder
        })
    ]
}