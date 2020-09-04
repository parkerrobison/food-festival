const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const path = require('path');
const webpack = require('webpack');

module.exports = {
    // this is the root of the bundle
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    // where the bundle gets created
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [{
            test: /\.jpg$/i,
            use: [{
                loader: "file-loader",
                options: {
                    name(file) {
                        return "[path][name].[ext]"
                    },
                    publicPath: function (url) {
                        return url.replace("../", "/assets/")
                    }
                }
            },
            {
                loader: 'image-webpack-loader'
              }
            ]
        }],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            JQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file in the dist folder. This can also be set to disable to stop the reporting and automatic opening of this report in the browser.
        })
    ],
    mode: 'development'
};