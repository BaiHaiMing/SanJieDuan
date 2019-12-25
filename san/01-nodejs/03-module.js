// 需求： 这里封装了方法， 导出给别人使用， 自定义模块
/* 
    模块：
        * 原生模块：绝对路径
        * 文件模块
        * 第三方模块：绝对路径
        * 自定义模式
            * 导出
                * mudule.exports
                * exports
            * 导入
                * require(相对路径)   
*/
let show = () => {
    let name = '夏老师';
    console.log(name);
}

let obj = {
    name:'老谢',
    adr:'广西钦州',
    showname() {
        console.log(this.name);
    }
}

//导出模块==暴露模块
// module.exports = show;//module.exports方式，只能一次导出一个接口。如果导出多个，前面的会被覆盖
// module.exports = obj;

module.exports = {
    show,
    obj
}
