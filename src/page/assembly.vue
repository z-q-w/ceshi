<template>
    <div>
        <div>-----------------子组件----------------</div>
            <sonpage ref="sonref" :content="content" published @chilbtn="chilbtn">
                <div style="background:#ccc">
                    我是插槽，当我不写内容的时候会用到组件默认的slot
                </div>
            </sonpage>
        <div>-----------------父组件----------------</div>
        <button @click="sonbut">点击向子组件传值</button>
        <div>
            {{childata}}
        </div>
        <div>-----------------插槽----------------</div>
        <slotpage :level="1">
            <template #header>
                <div>我是头部内容</div>
            </template>
            <!-- v-slot 也有缩写 v-slot:替换为字符 # -->
            <template v-slot:footer>
                <div>我是尾部内容</div>
            </template>
            <template v-slot:default="slotPropsss">
                <span class="fas fa-check">{{slotPropsss.index}}</span>
                <span class="green">{{ slotPropsss.item }}</span>
            </template>
            <template v-slot:helloWorld="userdata">
                <div>
                    姓名：{{userdata.name}}，年纪：{{userdata.age}}
                </div>
            </template>
            <template v-slot:dongtai="dynamicSlotName">
                <div>
                    {{dynamicSlotName.name}}
                </div>
            </template>
        </slotpage>
    </div>
</template>
<script>
import sonpage from '../components/sonpage.vue'
import slotpage from '../components/slotpage.vue'
export default {
    components:{
        sonpage,
        slotpage
    },
    data(){
        return{
            content:'',
            contentshow:false,
            childata:'',
            listdata:''
        }
    },
    mounted(){
        console.log(this.$refs.sonref)
         console.log(this.$slots)
    },
    methods:{
        sonbut(){
            this.contentshow=!this.contentshow
            if(this.contentshow){
                this.content='我是父组件的值'
            }else{
                this.content=''
            }
        },
        chilbtn(v){
            this.childata=v
        }
    }
}
</script>
<style>
    .ii{
        width:60px;
        
    }
</style>