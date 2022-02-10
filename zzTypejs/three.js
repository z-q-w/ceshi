"use strict";
//第三章 TypeScript 类与接口
class User {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    info() {
        console.log(this);
        return `${this.name}年龄是${this.age}`;
    }
}
let hd = new User('后盾人dd', 183);
for (var key in hd) {
    if (hd.hasOwnProperty(key)) {
        console.log(hd[key]);
    }
}
//泛型 generics  //可以动态的传递类型 比如传递 string boolean
// function fan(name:string): string{  //报错
//     return name
// }
// let qq=fan('name')
// let bo=fan(true)
// console.log(qq,bo)
function fan(name) {
    return name;
}
let qq = fan('namejhkjk');
let tt = fan(true);
console.log(qq, tt);
const sdtype = {
    name: '张三',
    age: 13,
    sex: 'boy',
    show: () => {
        return 'sdd';
    }
};
console.log(sdtype);
