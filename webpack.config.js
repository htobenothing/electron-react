var webpack = require('webpack');
var CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["webpack/hot/dev-server",'./src/app.js'],
        
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['public'], {
            exclude: ['index.html']
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        

    ],
    output: {
        path: "./public",
        filename: "app.bundle.js",
        publicPath: "http://localhost:8080/built/"
    },
    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },


}