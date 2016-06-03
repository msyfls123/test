var webpack = require("webpack");
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: {
      app: path.resolve(APP_PATH, 'index.js'),
      //添加要打包在vendors里面的库
      vendors: ['jquery','./src/js/global.js']
    },
    // 输出
    output: {
        path: BUILD_PATH,
        // 文件地址，使用绝对路径形式
        filename: 'js/[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        // publicPath: BUILD_PATH
        // 公共文件生成的地址
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
        // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
        // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        // 编译css并自动添加css前缀
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.less$/, loader: 'style!css!less?strictMath&noIeCompat'},
        // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=img/[name].[ext]'},
        //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    // .vue的配置。需要单独出来配置，其实没什么必要--因为我删了也没保错，不过这里就留这把，因为官网文档里是可以有单独的配置的。
    vue: {
        loaders: {
            css: 'style!css!less!autoprefixer',
        }
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    plugins: [
      new HtmlwebpackPlugin({
        title: 'ARK Homepage',
        template: path.resolve(TEM_PATH, 'index.html'),
        filename: 'index.html',
        //chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: ['app', 'vendors'],
        //要把script插入到标签里
        inject: 'body'
      }),
      new webpack.ProvidePlugin({
        $: "jquery"
      }),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
    ],
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    }
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
};
