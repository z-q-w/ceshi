<template>
    <div>
        我是子组件
        <div>
            {{content}}{{published}}
        </div>
        <button @click="sonbtn">点击向父组件传值</button>
         <slot>
            <div style="font-size:18px">备用内容</div>
         </slot>
    </div>
</template>
<script>
export default {
    props:{
        content:String,
        published:Boolean
    },
    data(){
        return{
            sondata:'我是子组件的值',
            sondatashow:false
        }
    },
    mounted(){

    },
    methods:{
        sonbtn(){
            this.sondatashow=!this.sondatashow
            if(this.sondatashow){
                this.$emit('chilbtn',this.sondata)
            }else{
                this.$emit('chilbtn','')
            }
            
        }
    }
}
</script>
<style>
</style>