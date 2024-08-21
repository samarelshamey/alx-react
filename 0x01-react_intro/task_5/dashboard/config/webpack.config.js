const path = require('path');

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist'),
},
mode: 'development',
devtool: 'inline-source-map',
module: {
rules: [
    {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
    },
    {
    test: /\.(png|svg|jpg|gif)$/i,
    type: 'asset/resource',
    },
    {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
    },
],
},
devServer: {
contentBase: path.join(__dirname, 'dist'),
compress: true,
port: 9000,
hot: true,
},
};
