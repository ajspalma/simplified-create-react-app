module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    }, 
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: {
            test: /\.(js||jsx)$/, // look for .js and .jsx files 
            exclude: /node_modules/, // ignore node_modules
            use: ['babel-loader'] // transfile using babel-loader, just like middleware??
        }
    },
    // for the extension like js to assume it is a Js file without .js extension
    resolve: {
        extensions: ['js', 'jsx']
    }
}