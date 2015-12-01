var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	context: __dirname + '/app',

	entry: {
		javascript: "./app.js",
		html: "./index.html"
	},

	output: {
		filename: "js/app.js",
		path: __dirname + "/dist"
	},

	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('css/style.css', {
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{from: 'images', to: 'images'}
		])
	],

	devServer: {
		historyApiFallback: true,
		port: 3000
	}
};
