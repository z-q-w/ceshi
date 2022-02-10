<template>
    <div>
        <div>
            <button @click="setobj">vue.set</button>
        </div>
        <div>
            <button @click="setdelete">vue.delete</button>
        </div>
        <div>
            <button @click="cnextTick">nextTick</button>
        </div>
        <div>
            <button @click="setdirective">注册的指令</button>
        </div>
        <div v-for="(item,index) in obj" :key="index">{{item}}</div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            content:'ww',
            obj:{
                name:'张三',
                age:'13',
                sex:'男'
            },
            poi:''
        }
    },
    mounted(){
        this.$nextTick(()=>{
            console.log('我是nextTick')
        })
        this.poi=new Proxy(this.obj, {
            get: function(target, propKey) {
                return target.name;
            },
            set:function(target, propKey,vl){
                console.log(target, propKey,vl)
                return target.age=vl
            }
        });
        this.poi.age='16'


    },
    methods:{
        setobj(){
            // this.obj.claff='6年纪'  //错误实例
            this.$set(this.obj,'claff','6年纪')
            console.log(this.obj)
        },
        cnextTick(){
            this.$nextTick(()=>{
                console.log('nextTick')
            })
        },
        setdelete(){
            // delete this.obj.name  //错误实例
            this.$delete(this.obj,'name')
            console.log(this.obj)
        },
        setdirective(){
            console.log(this.directive())
        }
    }
}
</script>
<style>
</style>