//需求：导入一个模块来使用

// 导入模块 ： require(相对路径)
let fn = require('./03-module');

//fn(); //因为导入的是一个函数， 需要调用才有意义
console.log(fn);

fn.showname(); //obj里面的方法
