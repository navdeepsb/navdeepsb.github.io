/**
 * @author Navdeep Singh Bagga
 * @desc The config file for webpack to bundle various modules
 */

var webpack = require( "webpack" );

module.exports = {
    entry: "./index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "app.js",
        publicPath: "public/"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [ "es2015", "react" ]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.svg$|\.jpe?g$|\.png$|\.pdf$|\.gif$/,
                exclude: /node_modules/,
                loaders: [ "file-loader?name=[name].[ext]" ]
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loaders: [ "json-loader" ]
            }
        ]
    },
    sassLoader: {
        data: "@import './ui/common/globals';"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};