const path = require('path')
const constants = require('./constants')
const multipage = require('./multipage.config')

const miniCss = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev

var htmlPlugins = multipage.pages.map(function(page) {
    return new HtmlWebpackPlugin({
        inject: true,
        template: page.template,
        filename: page.page,
        chunks: [...page.chunks],
    })
})

var result = {
    plugins:  [new miniCss({filename: "styles/[name].css"}), ...htmlPlugins],

     module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },

                {
                    test: /\.(s*)css$/,
                    use: [
                        miniCss.loader,

                        "css-loader",

                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env",
                                            {
                                                // Options
                                            },
                                        ],
                                    ],
                                },
                            },
                        },
                        "sass-loader",
                    ],
                },
            ],
        },
    optimization: {
            splitChunks: {
                chunks: "all",
            }
        }
    }

if (buildType === constants.modes.prod) {
    result.optimization = {
        ...result.optimization,
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
}

module.exports = result
