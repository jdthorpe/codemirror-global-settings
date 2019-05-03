// consider adding tasks that do: 
// cp node_modules/materialize-css/dist/css/materialize.min.css ./public/
// cp node_modules/materialize-css/dist/js/materialize.min.js ./public/
const webpack = require('webpack')
const path = require('path')

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    devtool: 'cheap-source-map', // prevents eval("modeule code...")
    module: {
        rules: [
            {
                include: [path.resolve(__dirname)],
                loader: 'babel-loader',

                options: {
                    plugins: ['syntax-dynamic-import'],

                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false,
                            },
                        ],
                    ],
                },

                test: /\.js$/,
            },
            {
                loader: 'raw-loader',
                test: /\.css$/,
            },
        ],
    },

    entry: {
        //options: __dirname + '/ext/options.js',
        content: __dirname + '/ext/content.js',
        background: __dirname + '/ext/background.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
    },

    mode: 'development',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                },
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true,
        },
    },
}
