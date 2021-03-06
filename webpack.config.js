/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = (env, argv) => ({
    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: argv.mode === 'production' ? false : 'inline-source-map',
    entry: {
        ui: './src/ui/main.ts', // The entry point for your UI code
        code: './src/code.ts', // The entry point for your plugin code
    },

    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },

            // Enables including CSS by doing "import './file.css'" in your TypeScript code
            { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            additionalData: '@import "src/ui/assets/scss/main.scss";',
                            sassOptions: {
                                includePaths: [__dirname, 'src'],
                            },
                        },
                    },
                ],
            },

            {
                test: /\.pug$/,
                loader: 'pug-plain-loader',
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
            { test: /\.(png|jpg|gif|webp)$/, loader: [{ loader: 'url-loader' }] },

            //load fonts
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
            },
        ],
    },

    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'), // Compile into a folder called "dist"
    },

    // Tells Webpack to generate "index.html" and to inline "main.ts" into it
    plugins:
        argv.mode === 'production'
            ? [
                  new VueLoaderPlugin(),
                  new RemovePlugin({
                      after: { include: ['dist/ui.js'] },
                  }),
                  new HtmlWebpackPlugin({
                      template: './src/ui/index.html',
                      filename: 'index.html',
                      inlineSource: '.(js|css|scss)$',
                      chunks: ['ui'],
                  }),
                  new HtmlWebpackInlineSourcePlugin(),
              ]
            : [
                  new VueLoaderPlugin(),
                  new HtmlWebpackPlugin({
                      template: './src/ui/index.html',
                      filename: 'index.html',
                      inlineSource: '.(js|css|scss)$',
                      chunks: ['ui'],
                  }),
                  new HtmlWebpackInlineSourcePlugin(),
              ],
});
