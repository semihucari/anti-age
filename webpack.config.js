const webpack = require('webpack');

module.exports = {
    entry: [
        "babel-polyfill", "./src/index.js"
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/react"],
                        "plugins": ["@babel/plugin-syntax-dynamic-import"]
                    }
                }
            }, {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 99999999999
                    }
                }
            }, {
                test: /\.(gif|svg|mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        context: ''
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    }
};