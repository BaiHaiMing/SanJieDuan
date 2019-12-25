//需求： 利用原生HTTP模块开启一个服务器

// 原生模块：不需要安装， 直接就可以引用的模块
let http = require('http'); //写绝对路径

let app = http.createServer((req, res) => {
    /* req:request  请求：客户端发给服务器端 */
    /* res:respnse  响应，服务器发送给客户端 */
    res.writeHead(200,{ 'content-Type': 'text/html;charset=utf-8'});
    res.write('hello h51912'); //服务器发送给客户端的信息
    res.write('<h1>超神三阶段</h1>')
    res.end('nodejs 之旅'); // 发送完成记得结束响应
});

app.listen(1912, () => {
    console.log('服务器开启成功, 请访问http://localhost:1912');
})