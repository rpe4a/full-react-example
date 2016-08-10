'use strict';

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    resolve: { modulesDirectories: ['node_modules', 'src', 'bower_components'], extension: ['', '.js', '.scss', '.css'], alias: [{ jquery: "bower_components/jquery/dist/jquery.js" }] },
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/js/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /bower_components\/dist\/bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
        ]
    },
    postcss: function () {
        return [autoprefixer({
            browsers: ['last 2 versions', '> 1%']
        }), precss];
    },
}