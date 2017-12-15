const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest = require('webpack-manifest');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tags: [
            path.join(__dirname, '../src/public/scripts/tags.es'),
            path.join(__dirname, '../src/public/scripts/star.es')
        ]
    },
    output: {
        filename: 'public/scripts/[name]-[hash:5].js',
        // publicPath: 'http://192.168.7.117:3000/',
        path: path.join(__dirname, '../build/')
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015',
                        'stage-0'
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'dev'
            }
        }),
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/vendor-[hash].min.js'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false
        }),
         new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor','index','tags'],
        }),
         new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './widget/index.html',
            template: 'src/widget/index.html',
            inject: false,
        }),
         new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './views/star.html',
            template: 'src/views/star.js',
            inject: false,
            chunks: ['vendor','index','tags'],
        }),
         new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './widget/star.html',
            template: 'src/widget/star.html',
            inject: false,
        }),
         new Manifest({
                 cache: [
                   './public/css/vendor-[hash:5].css', 
                   './public/scripts/common/vendor-[hash].min.js', 
                   './public/scripts/index-[hash:5].js', 
                   './public/scripts/tags-[hash:5].js', 
                 ],
                 timestamp: true,
                 // 生成的文件名字，选填 
                 filename:'cache.manifest', 
                 // 注意*星号前面用空格隔开
                 network: [
                    'http://cdn.bootcss.com/ *',
                    'http://localhost:3000/ *'
                 ],
                 // manifest 文件中添加注释 
                 headcomment: "lihuiwen v 1.2", 
                 master: ['./views/layout.html']
             })
    ]
}