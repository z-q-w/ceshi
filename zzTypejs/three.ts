//第三章 TypeScript 类与接口
class User{
    public name:string
    public age:number
    constructor(n:string,a:number){
        this.name=n
        this.age=a
    }
    public info():string{
        console.log(this)
        return `${this.name}年龄是${this.age}`
    }
}
let hd = new User('后盾人dd', 183)
for (var key in hd) {
    if(hd.hasOwnProperty(key)){
        console.log(hd[key])
    }
}


//泛型 generics  //可以动态的传递类型 比如传递 string boolean
// function fan(name:string): string{  //报错
//     return name
// }
// let qq=fan('name')
// let bo=fan(true)
// console.log(qq,bo)
function fan<T>(name:T): T{
    return name
}
let qq=fan<string>('namejhkjk')
let tt=fan<boolean>(true)
console.log(qq,tt)




//泛型与类
// class CollectionNumber{ //第一种
//     data:(string|number)[]=[]
//     public pushs(...item:(string|number)[]){
//         this.data.push(...item)
//     }
// }
// let numbercollbtion=new CollectionNumber()
// numbercollbtion.pushs('1','3',44)
// console.log(numbercollbtion)
// class CollectionNumber<HD>{ //第二种
//     data:HD[]=[]
//     public pushs(...item:HD[]){
//         this.data.push(...item)
//     }
// }
// let numbercollbtion=new CollectionNumber<string | number>()
// numbercollbtion.pushs('1','3',99)
// console.log(numbercollbtion)




// class 类 protected修饰符得使用 
//public 外部也可以访问   
//protected只能类内部使用子也可以使用 外部使用会报错   
// private 私有得只能内部使用
// readonly 是只读，不可修改
// class Pruser{
//     protected name:string
//     public age:number
//     private sxd:string
//     readonly home:string
//     constructor(n:string,a:number,c:string,d:string){
//         this.name=n
//         this.age=a
//         this.sxd=c
//         this.home=d
//     }
//     info(){
//         console.log(this.name)
//     }
// }
// const prsd= new Pruser('王二',28,'男','上海市')
// console.log(prsd)


// //访问器  get与set
// class Article{
//     private _list:string[] =[]
//     public get article(){
//         return this._list.map(item=>{
//             item=item.substr(0,2)
//             return item
//         })
//     }
//     public set article(lists){
//         this._list=lists
//     }
// }
// let ghd=new Article()
// ghd.article=['wwwfff','oooddd']
// console.log(ghd.article,'p批破哦')



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
type sexd='boy'|'girl'
// type usertype={
//     name:string,
//     age:number,
//     sex:sexd,
//     show():string
// }
interface usertype{
    name:string
    age:number
    sex:'boy'|'girl'
    show():string
}
const sdtype:usertype={
    name:'张三',
    age:13,
    sex:'boy',
    show:()=>{
        return 'sdd'
    }
}
console.log(sdtype)




