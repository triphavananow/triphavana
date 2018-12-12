var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",//path relative to this file
    output: {
        filename: "app.bundle.js"//path relative to this file
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html' //relative to root of the application
        })
   ]
}