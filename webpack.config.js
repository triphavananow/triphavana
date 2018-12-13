var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        app: "./src/js/app.js",
        transportation: "./src/js/transportation.js",
        acomodation: "./src/js/acomodation.js"

    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './dist'
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
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.hbs',
            data: { header: require('./data/header.json'), tours: require('./data/tours.json') },
            chunks: ['app'],
            filename: 'index.html' //will be in dist folder
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Transportation',
            myPageHeader: 'Hello Services',
            template: './src/transportation.hbs',
            data: { header: require('./data/header.json') },
            chunks: ['transportation'],
            filename: 'transportation.html' //will be in dist folder
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Acomodations',
            myPageHeader: 'Hello Services',
            template: './src/acomodation.hbs',
            data: { header: require('./data/header.json') },
            chunks: ['acomodation'],
            filename: 'acomodation.html' //will be in dist folder
        })
    ]
}