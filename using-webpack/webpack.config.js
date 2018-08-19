const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: path.join(__dirname, "src", "app.js"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "app.bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html")
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "src")
	}
};
