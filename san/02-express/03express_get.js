// 需求：借助第三块模块 express 快速搭建静态资源服务器

//引入模块
const express = require('express');
//调用方法生成对象
const app = express();

//借助中间件开启静态资源服务器

app.use(express.static('./')); //以当前目录为站点根目录
/* 
    * 缓存：静态资源：html、css、js、视频、音频、图片(数据部分不会缓存，因为是靠ajax请求回来的)
        * 强制缓存：maxAge : 1h 客户端发送请求后，静态资源已经载入本地，在一个小时内再发送请求，是不会请求静态资源，会从缓存读取数据，不会浪费服务器资源；第一次：请求新的 200 第二次起：如果还在缓存时间内，在本地缓存读取数据。200 cache
        * 协商缓存：maxAge : 1h 第二次请求，已经超过了缓存时间,比如：a.jpg 已经请求过了，现在要请求第二次资源，服务器和你协商，你要的资源，服务器这边还未改动过，a.jpg,让你(客户端)还是去缓存读取 304.
        * 离线缓存：访问过某个网页，断网，打开，页面还在。在联网的情况下，设置一个文件，让页面的内容自动载入离线缓存里面 cache storage。离线的时候，还可以看到。小说站。
*/
// app.use(express.static('./', { index: './list.html', maxAge: 3600000 }));//以当前目录为站点根目录

/* 
    app.use([path],...middlewares)
        * path 路径，路由，选写
        * middlewares 中间件
            * 中间件就是一个函数
            * 这个函数能帮我们处理数据
            * 在请求和响应之前调用
            * 提高开发效率
            * 里面是一个回调，回调里面有三个参数
                * req
                * res
                * next; 进入下一个中间件
    分类：
        * 自定义中间件 ：自己写的
        * 第三方中间件 ：需要npm安装引入的
        * 内置中间件：express模块自带
            * express.static() 开启静态资源服务器  
*/