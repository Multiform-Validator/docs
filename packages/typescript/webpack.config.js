const path = require('path');

module.exports = {
	mode: 'production', // production mode
	entry: './index.ts', // entry point of your application
	output: {
		filename: 'bundle.js', // output file name
		path: path.resolve(__dirname, 'dist'), // output folder
		libraryTarget: 'umd', // this allows your module to be used via require() and as a global
		globalObject: 'this' // this ensures that 'this' is 'window' in a browser environment
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
};
