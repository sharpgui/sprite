const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    webpack: {
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve('index.html')
            })
        ]
    }
}
