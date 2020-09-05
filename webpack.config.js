const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require("webpack-pwa-manifest");

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
        }),
        new WebpackPwaManifest({
            name: "Food Event",
            short_name: "Foodies",
            description: "An app that allows you to view upcoming food events.",
            background_color: "#01579b",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
              src: path.resolve("assets/img/icons/icon-512x512.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("assets", "icons")
            }]
          })
    ],
    mode: 'development'
};