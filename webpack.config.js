const path = require('path');
const webpack = require('webpack');

module.exports = {
    // this is the root of the bundle
    entry: './assets/js/script.js',
    // where the bundle gets created
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            JQuery: 'jquery'
        }),
    ],
    mode: 'development'
};