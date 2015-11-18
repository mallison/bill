var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var path = require("path");

module.exports = {
    context: __dirname,
    
    entry: [
        './js/src/main.js',
    ],
    
    output: {
        path: path.resolve('./js/'),
        filename: "bundle.js",
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader?optional[]=es7.comprehensions&optional[]=es7.classProperties&optional[]=es7.objectRestSpread&optional[]=es7.decorators"],
            }
        ]
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats-prod.json'}),

        // removes a lot of debugging code in React
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }}),

        // keeps hashes consistent between compilations
        new webpack.optimize.OccurenceOrderPlugin(),

        // minifies your code
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    extensions: ['', '.js', '.jsx']
  }
};
