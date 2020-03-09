// webpack is a code/module bundler for JS apps - it takes code and makes it usable in a browser.
// when webpack processes an app, it builds a 'dependency graph' which maps code and assets the project needs and generates one or more 'bundles'.
// A 'bundle' is a group of connected code that has been compiled for the browser.

// there are 3 things webpack needs to know
var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
	// 1. what the starting point of app is (root JS file)
    entry : './app/index.js',
    // 2. which transformations to make
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'}, //use babel JS compiler on all extensions that end with .js
            {test : /\.css$/, use:['style-loader', 'css-loader']} //interprets @import and url() like import/require()
        ]
    },
    // 3. where to output newly transformed code when webpack runs (it will end up in {AppName}/dist/index_bundle.js)
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}
