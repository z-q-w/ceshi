<template>
    <div>
        <input type="text" v-focus>
        <div v-sy="30">sdd</div>
        <div id="mount-point"></div>
        <div @click="setobj">{{content}}</div>
        <div v-for="(item,index) in obj" :key="index">{{item}}</div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default{
    directives: {// 自定义指令
        focus: {
            //  页面开始自动获取输入框的焦点
            inserted: function (el) {
                el.focus()
                console.log(el)
            }
        },
        sy:{
            //给元素添加样式
            bind:function(el, binding, vnode){
                console.log(el,binding,vnode)
                el.style.color= 'rgb(46, 189, 165)'
                el.style.fontSize= binding.value + 'px'
            }
        }
        
    },
    data(){
        return{
            content:'ww',
            obj:{
                name:'张三',
                age:'13',
                sex:'男'
            }
        }
    },
    mounted(){
        console.log(Vue)
        var Profile=Vue.extend({
            template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
            data: function () {
                return {
                    firstName: 'Walter',
                    lastName: 'White',
                    alias: 'Heisenberg'
                }
            }
        })
        new Profile().$mount('#mount-point')
        this.$nextTick(()=>{
            console.log('我是nextTick')
        })
    },
    methods:{
        setobj(){
            this.$set(this.obj,'claff','6年纪')
            // this.obj.claff='6年纪'
            console.log(this.obj)
        }
    }
}
</script>
<style>
    .o{
        color: rgb(46, 189, 165);
    }
</style>
<!-- 
全局自定义指令
        Vue.directive('sy',{
            //给元素添加样式
            bind:function(el, binding, vnode){
                console.log(el,binding,vnode)
                el.style.color= 'rgb(46, 189, 165)'
                el.style.fontSize= binding.value + 'px'
            }
        }) 
-->