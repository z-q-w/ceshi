// 一共三个种暴露方法 export   export default   module.exports
//一共三个引入方法           import() 先于模块内其他语句执行
                //          require() 运行时加载模块
                //          <script src="./js.js"></script>
//<script>标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。
//在登录页有例子

// let title="后盾人"
// let url='houdunren.com'
// function name(aa='oo'){
//     console.log('我是name' + aa)
// }
// export {
//     title,url,name
// }


// const api = {}
// api.name='张三',
// api.age='23'
// export default api



const utils = {
    name:'ppppp撒飒飒',
    age:'问无为谓'
}
module.exports = {
	name: utils.name,
	age: utils.age,
}