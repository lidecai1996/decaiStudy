// 数组解构赋值
// let [a,b,...e] = [1,2,3,4,5,6,7,8,9];
// let [arr1,arr2,arr3] = [1,2,3,4]

// 不完全解构
// let [a,b,c,,e] = [1,2,3,4,5]

// 默认值
// let [x,y,z,w=55] = [1,2,3]

// 对象解构
// let { foo , bar} = {foo:'aaa',bar:'bbb'};

// let obj = {
//   p: ["arr", { name: "li" }]
// };
// let { p, p: [arr, { name }]} = obj;



// 模板字符串

// 函数参数默认值
// let x = 10;
// let user = (x, y = 12) => {
//     console.log(x, y);
//     return 123
// }
// let a = user(x, 33);
// console.log("a", a);

// 模板字符串
let str = 123;
console.log(`${str}sdjfhaksdhf
sdifjhasdjhf
`);
