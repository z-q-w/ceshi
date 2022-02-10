"use strict";
// function nudm(a:number,b:number){
//     return a + b
// }
// console.log(nudm(77,4))
//let hd='houden.com'
//hd='kkk'
//console.log(hd)
//const ff=['houdunern.com']
//ff.push('yanhu.com')
//console.log(ff)
//let arr:(string | boolean | number)[]=[]  //这个数组可以放string  boolean  number类型
//arr.push(true)
//arr.push(233)
//arr.push('hahha')
//console.log(arr)
//let arrlist:(string | boolean)[]=[]
//arrlist.push('ss')
//arrlist.push(33)
//arrlist.push(true)
//let obj={
//    anme:'后盾人',
//    age:13,
//    open:true,
//}
//
//let hd:{name:string;age:number;url?:number}  //?代表url可以写值也可以不写
//hd={
//    name:'张三',
//    age:13
//}
//console.log(hd)
//let strhd:string | number | boolean
//strhd=true
//console.log(strhd)
//let arrhd:( string| number | boolean)[]=[]
//arrhd.push('sss',true,333)
//console.log(arrhd)
//any类型意思是什么数据类型都可以
//let hd:any='houdunren.com'
//
//let arr:any[]=[]
//hd=function(){}
//arr.push('ssd',99,true,null,undefined)
//console.log(hd,arr)
//unknown类型是不知道什么类型
// let hd: any='houdunren.com'
// let a:string =hd
// let xj:unknown ='后盾人'
// let b:string = xj as string
// console.log(a,b)
// let stt:string = '99'
// let s:number = stt as unknown as number  //通过转换把字符传复制给number
// console.log(s)
//void 与 never   //void值只能是undefined 改变其他类型会报错   //never标识什么都没有  这个两个都很少用
// let hd: void = undefined
// hd='ppp'
// console.log(hd)
//函数声明
// function sum(a:number,b:number,ratio?:number){
//     console.log(a,b,ratio)
//     return a + b
// }
// console.log(sum(2,4))
// function sum(a:number,b:number,ratio:number=2){
//     console.log(a,b,ratio)
//     return (a + b)*ratio
// }
// console.log(sum(2,4))
// 元组和数组得区别
// let arr:(string|boolean|number)[]=[]   //数组里可以有 string|boolean|number 可以是任意顺序添加多个
// arr.push('stt',77,45,true)
// console.log(arr)
// let arr1:[string,number,boolean]=['houdunren',18,true]   //数组必须按照规定类型
// arr1[0]='true'
// console.log(arr1)
