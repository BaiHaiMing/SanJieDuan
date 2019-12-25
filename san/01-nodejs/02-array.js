let arr = [1, 2, 3] // 数组

//拼接数组
let str = arr.map(item => {
    return  `<li>${item}</li>`
}).join('');


console.log(str); //到noded环境运行该文件  node 02-array.js
