const webpack = require('webpack')


module.exports = {
    entry: './public/index.js',
    output: {
        path: `${__dirname}/src`,
        filename: `./bundle.js`
    },
    devServer: {
        port: 8080,
        contentBase: `./src` 
    }
}