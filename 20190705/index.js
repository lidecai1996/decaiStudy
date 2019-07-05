// Math.sign()
// // Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

// // 它会返回五种值。

// // 参数为正数，返回+1；
// // 参数为负数，返回-1；
// // 参数为 0，返回0；
// // 参数为-0，返回-0;
// // 其他值，返回NaN。
// let num = -3;
// console.log(Math.sign(num));


// // Math.cbrt方法用于计算一个数的立方根。
// let num = 30;
// console.log(Math.cbrt(num));

// 函数参数的默认值
// function name(z, y = 12) {
//     console.log(z, y)
// }
// name(10)//10,12


// //   如果传入undefined，将触发该参数等于默认值，null则无效
// function foo(x = 5, y = 6) {
//     console.log(x, y);
// }
// foo(undefined, null)// 5 null

// 作用域
// let x = 1;
// function f(x, y = x) {
//     console.log(y);
// }

// f(2) // 2

// let foo = 'outer';
// function bar(func = () => foo) {
//     let foo = 'inner';
//     console.log(func());
// }
// bar(); // outer

// // yange模式
// // 从 ES5 开始，函数内部可以设定为严格模式，
// // 只要函数参数使用了默认值、解构赋值、或者扩展运算符，函数内部就不能显式设定为严格模式，否则会报错



// 函数的name属性
// function lii() {
// }
// console.log(lii.name);//lii


// 箭头函数
// let num = () => 5;
// console.log(num);

// 尾调用
// // 尾调用不一定在函数尾部，是最后一步操作

// 扩展运算符
// console.log(...[1, 2, 3])//1 2 3

// 复制数组
// const one = [1, 2];
// const tow = one;
// tow[0] = 2;
// console.log(one)// [2, 2]

// 合并数组
// let a = [1, 2, 3, 4];
// let b = [2, 3, 4, 5];
// let c = [3, 4, 5, 6];
// console.log([...a, ...b, ...c]);

// 与解构赋值结合
// const [arr, ...user] = [1, 2, 3, 4, 5];
// console.log("arr", arr, "user", user);
// // arr=1  user=2345
