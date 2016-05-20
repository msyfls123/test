var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  //��Ŀ�ļ��� ����ֱ���ü������� Ĭ�ϻ���index.js Ҳ����ȷ�����ĸ�������
    entry: {
      app: path.resolve(APP_PATH, 'index.js'),
      mobile: path.resolve(APP_PATH, 'mobile.js'),
      //添加要打包在vendors里面的库
      vendors: ['jquery', 'moment']
    },
      //�����ļ��� �ϲ��Ժ���js������Ϊbundle.js
    output: {
	    path: BUILD_PATH,
	    filename: '[name].js'
	  },
    module: {
      loaders: [
        {
          test: /\.js(x)?$/,
          loader: 'babel',
          include: APP_PATH,
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css','sass'],
          include: APP_PATH
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192&name=img/[name].[ext]'
        }
      ]
    },
      //�������ǵĲ��� ���Զ�����һ��html��
   plugins: [
     new HtmlwebpackPlugin({
       title: 'Hello World app',
       template: path.resolve(TEM_PATH, 'index.html'),
       filename: 'index.html',
       //chunks这个参数告诉插件要引用entry里面的哪几个入口
       chunks: ['app', 'vendors'],
       //要把script插入到标签里
       inject: 'body'
     }),
     new HtmlwebpackPlugin({
       title: 'Hello Mobile app',
       template: path.resolve(TEM_PATH, 'mobile.html'),
       filename: 'mobile.html',
       chunks: ['mobile', 'vendors'],
       inject: 'body'
     }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
   ],
	 devServer: {
	     historyApiFallback: true,
	     hot: true,
	     inline: true,
	     progress: true,
	     },
  };
