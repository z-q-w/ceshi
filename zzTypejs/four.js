"use strict";
//第四章 typescript 泛型 Generices
//平常ts写法
function dunp(arg) {
    return 'dds';
}
let hdf = dunp('houdunren.com');
//动态设置类型
function hdsfg(arr) {
    return arr;
}
let gt = hdsfg('ppp');
let fg = hdsfg(true);
let f;
f = "a";
//any 表示的是任意类型
let anyd;
anyd = 'sss';
//unknown 表示未知类型的值 和any差不多
let nusd;
nusd = 22;
nusd = "dsss";
nusd = false;
//unknown 和any的区别   unknown类型不可以复制给别的数据类型是会报错不允许
//                     any类型可以复制给任意数据类型
let qu;
let quber;
let quarr;
let quobj;
let unf;
let uu;
//  qu = uu
//  quber=uu
//  quarr=uu
//  quobj=uu
// quobj=unf
// 断言 ，可以用来告诉解析器变量的实际类型
let fddf;
let sh;
fddf = 'ppp';
sh = fddf; //也可以这么写 sh=<string>fddf
//void 用来表示空，以函数为例，就是表示没有返回值
function fn() {
}
//never 表示永远不会返回结果
function fn2() {
    throw new Error('报错了');
}
// fn2()
// object 对象  属性后面加上?表示可选熟悉写不写都可以
let bo;
bo = {
    name: '张三',
    age: 13
};
//[prooname:string]:any 表示任意类型的属性  可以随意添加属性
let cof;
cof = {
    name: '李四',
    age: 13,
    sex: '难'
};
//Array 数组
let arrlist;
arrlist = ['22', 'oo', 22];
//元组  元组就是固定长度的数组 超出就会报错
let yuanarr;
yuanarr = ['sss', 'fff'];
//enum 枚举
//类的使用
{
    //类
    // class 类 protected修饰符得使用 
    // public 外部也可以访问和修改
    // protected 只能类内部使用子也可以使用 外部使用会报错   
    // private 私有得只能内部使用
    // readonly 是只读，不可修改
    class Pruser {
        //constructor 被称为构造函数  会在对象调用前调用
        constructor(n, a, c, d) {
            //在实例方法种，this就表示当前的实例 prsd
            this.name = n;
            this.age = a;
            this.sxd = c;
            this.home = d;
        }
        info() {
            console.log(this);
        }
    }
    const prsd = new Pruser('王二', 28, '男', '上海市c');
    console.log(prsd.age);
}
//类的继承
{
    //比如创建一个狗的类和猫的类
    /**
     * 以abstract开头的类是抽象类
     *  抽象类和其他的类区别不大，只是不能用来创建对象
     *  抽象类就是专门用来被继承的
     */
    class Animl {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayhello() {
            console.log(this.name, '动物在叫');
        }
    }
    /*
        此时的Animl被称为父类，dog被称为子类
        使用继承后，子类将会拥有父类的所有方法和属性
    **/
    //使Dog继承Animl类
    class Dog extends Animl {
        run() {
            console.log(`${this.name}在跑~`);
        }
    }
    //使Cat继承Animl类
    class Cat extends Animl {
    }
    let dog = new Dog('小黑狗', 5);
    let cat = new Cat('小花猫', 3);
    // let ghhg=new Animl('小花猫',3)
    // dog.sayhello()
    // cat.sayhello()
    // dog.run()
    console.log(dog);
}
//接口 
{
    //interface  接口约束ts对象  interface约束对象必须要有Userinfo这里写的元素  可以加?号可写可不写
    // interface Userinfo{
    //     name?:string
    //     age:number
    //     info():string
    // }
    // let hduser:Userinfo={
    //     // name:'zhangsan',
    //     age:14,
    //     info(){
    //         return 'pp'
    //     }
    // }
    // console.log(hduser)
    //interface 约束ts函数的返回值，参数 对象
    // interface userInterface{
    //     name:string,
    //     age:number,
    //     isLock:boolean
    // }
    // const setsd:userInterface={
    //     name:'lisi',
    //     age:34,
    //     isLock:false
    // }
    // function isLock(user:userInterface,lock:boolean):userInterface{
    //     console.log(user)
    //     user.isLock=lock
    //     return user
    // }
    // isLock(setsd,true)
    //interface 约束数组 arr
    // interface arryue{
    //     name:string,
    //     age:number,
    //     sex:string
    // }
    // let arr:arryue[]=[
    //     {
    //         name:"张三",
    //         age:23,
    //         sex:'男'
    //     }
    // ]
    // console.log(arr)
    // let listw:(string|number)[]=[]
    // listw.push(11,33,'pp')
    //type 和 interface的区别  他们都是约束数据类型的
    //type sexd='boy'|'girl'
    // type usertype={
    //     name:string,
    //     age:number,
    //     sex:sexd,
    //     show():string
    // }
    // interface usertype{
    //     name:string
    //     age:number
    //     sex:'boy'|'girl'
    //     show():string
    // }
    // const sdtype:usertype={
    //     name:'张三',
    //     age:13,
    //     sex:'boy',
    //     show:()=>{
    //         return 'sdd'
    //     }
    // }
    // console.log(sdtype)
}
