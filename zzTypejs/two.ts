// function hd(arg:boolean):number | string{
//     return arg ? 'haha':'xixi'
// }
// let res=hd(false) as number   //断言他是number类型就不可以在修改他为其他类型
// //res='ooo'
// console.log(res)
// console.log(hd(true))

//断言
// let a ='houdunren'
// let b = 13
// let arr =[a, b] as const
// let f =arr[1]
// f=99
// // f='oo'  报错
// console.log(f)


// function hd(){
//     let a='houdunren.com'
//     let b=(x:number,y:number)=>{
//         return x + y
//     }
//     return [a,b]
// }
// //const [n,m]=hd()  //此时的m也就是hd里的b他不是一个函数不能直接调用 需要转一下
// //console.log((m as Function)(18,3))  也可以这么写
// const [n,m]=hd() as [string,Function]
// console.log(m(3,5))


//DOM类型断言
let el=document.querySelector('.hd')!
let body = document.querySelector('body') as HTMLBodyElement
console.log(el)

 