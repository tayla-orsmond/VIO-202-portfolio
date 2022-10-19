const path = require("path");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '...']
    },
    entry: "./src/index.js",
    output: {
    path: path.resolve("public"),
    filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.svg$/,
                exclude: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}