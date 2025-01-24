'use strict';

function func(arg) {
  console.log(`arg 1: ${arg}`);
  { // 块级作用域，在块级作用域中声明的变量只能在此块级作用域以及其子作用域中使用
    let arg;
    arg = 1
    console.log(`arg 2: ${arg}`);
  }
  console.log(`arg 3: ${arg}`);
}

func(5)

// 1. ES6使用let关键字 在全局作用域，函数作用域的基础上添加了块级作用域
//    块级作用域使用大括号来定义{}
// 2. 块级作用域中可以声明函数，类似于let， Node环境下生效
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// 上述代码在浏览器中会报错，提示f找不到，浏览器中使用函数表达式来声明函数
// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     let f = function () { console.log('I am inside!'); }
//   }

//   f();
// }());

// Map使用
// object有默认的prototype，属性可能会和prototype中的属性冲突
// Map没有继承任何属性，不存在属性冲突
// Map会记录所保存key的顺序
// Map的性能会更加好点

const m = new Map(Object.entries({
  a: '1',
  b: '2',
  c: '3'
}))

// Map可迭代
m.forEach((x, y) => {
  console.log(x, y);
})
