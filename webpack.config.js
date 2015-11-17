var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var path = require("path");

module.exports = {
  context: __dirname,
  
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './js/src/main.js',
  ],
  
  output: {
    path: path.resolve('./js/'),
    filename: "bundle.js",
    publicPath: 'http://localhost:3000/js/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?optional[]=es7.comprehensions&optional[]=es7.classProperties&optional[]=es7.objectRestSpread&optional[]=es7.decorators"],
        include: [path.join(__dirname, 'js')]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    extensions: ['', '.js', '.jsx']
  }
};
