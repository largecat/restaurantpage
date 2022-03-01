const path = require('path');

module.exports = {
	entry  : './src/index.js',
	output : {
		filename : 'main.js',
		path     : path.resolve(__dirname, 'dist')
	},
	module : {
		rules : [
			{
				test : /\.css$/i,
				use  : [ 'style-loader', 'css-loader' ]
			},
			{
				test : /\.(png|svg|jpg|jpeg|gif)$/i,
				type : 'file-loader'
			},
			{
				test   : /\.(jpe?g|jpg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader : 'url-loader'
			}
		]
	}
};
