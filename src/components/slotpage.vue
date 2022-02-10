<template>
    <div>
        <h3>具名插槽</h3>
        <div class="o">
           <slot name="header"></slot>
            <slot name="footer"></slot>
        </div>
        <h3>作用域插槽 传值</h3>
        <div v-for="( item, index ) in items" :key="index">
            <slot :item='item' :index="index"></slot>
        </div><br>
        <div>
            <slot name='helloWorld' v-bind="user"></slot>
        </div>
        <div>
            <slot name="dongtai" v-bind="dynamicSlotName"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            level:Number
        },
        data(){
            return{
                items: ['Feed a cat', 'Buy milk'],
                user:{
                    name:'oralinge',
                    age:18
                },
                dynamicSlotName:{
                    name:"快捷键"
                }
            }
        },
        mounted(){
            console.log(this.$slots)
        },
        methods:{

        },
        
    }
</script>
<style>
    .o{

    }
</style>