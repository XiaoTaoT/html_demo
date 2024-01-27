const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        app: "./examples/index.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },

    devServer: {
        port: 9090
    },

    resolve: {
        extensions: [".js", ".vue"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        preserverWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ]
}
