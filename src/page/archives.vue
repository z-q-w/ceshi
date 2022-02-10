<template>
  <div>
    <el-button type="primary"  @click="getjie">post 接口 </el-button>
    <div>
      <el-input v-model="input" style="width: 500px;padding:20px 0" :placeholder="switchdata ? '测试中英文切换':'Test Chinese English switching'"></el-input>
    </div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      style="width: 500px;"
    ></el-input>
    <div @click="ssss()">
      sds
    </div>
    <el-checkbox-group 
      v-model="checkedCities"
      @change='checkchange'
      >
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <div>
      contextmenu.prevent
      ------------------------- 鼠标事件 ------------------------
    </div>
    <button  @click.left="mouseclick('左')">鼠标修饰符，左</button>
    <button @click.middle="mouseclick('中')">鼠标修饰符，中</button>
    <button @contextmenu.prevent="mouseclick('右')">鼠标修饰符，右</button><br/>
    <button @click="mouseclick('点击触发')">点击触发</button>
    <button @contextmenu.prevent="mouseclick('点击右键触发')">点击右键触发</button>
    <button @dblclick="mouseclick('双击触发')">双击触发</button>
    <button @mousedown="mouseclick('鼠标按下触发')">鼠标按下触发</button>
    <button @mouseenter="mouseclickmode('鼠标移动到元素上触发',$event)" @mouseleave="mouseleavecl('鼠标移出元素触发',$event)">鼠标移动到元素上触发</button>
    <button @mouseleave="mouseclick('鼠标移出元素触发')">鼠标移出元素触发</button>
    <!-- <div @mouseover="mouseclick">鼠标移到某元素之上</div> -->
    <br/>------------------------- 键盘事件 ------------------------<br/>
    <input placeholder="回车键" @keyup.enter="keyshijian('回车键')"/><br/>
    <input placeholder="返回键" @keyup.esc="keyshijian('返回键')"/><br/>
    <input placeholder="空格键" @keyup.space="keyshijian('空格键')"/><br/>
    <input placeholder="向上键" @keyup.up="keyshijian('向上键')"/><br/>
    <input placeholder="向下键" @keyup.down="keyshijian('向下键')"/><br/>
    <input placeholder="向左键" @keyup.left="keyshijian('向左键')"/><br/>
    <input placeholder="向右键" @keyup.right="keyshijian('向右键')"/><br/>
    <div v-if="showtip" :style="{left:toptip,top:lefttip}" class="tipstyle">
      提示
    </div>
    <button @mouseenter="mouseclickmode('鼠标移动到元素上触发',$event)" @mouseleave="mouseleavecl('鼠标移出元素触发',$event)">鼠标移动到元素上触发ccc</button>
    <router-view></router-view>
    <div>
      <button :title="xuanfu">鼠标悬浮提示文字</button>
    </div>
    <div>
      <button @click="computedbtn" :class="{'styleji':jisuan}">
        计算属性
      </button>
    </div>
    <br/>------------------------- 多选 ------------------------<br/>
    {{checkboxarr}}
    <div v-for="(item,index) in checkboxlist" :key="index">
      <input type="checkbox" :id="item" :value="item" v-model="checkboxarr">
      <label :for="item">{{item}}</label>
    </div>
    <br/>------------------------- input修饰符 ------------------------<br/>
    <input v-model.trim="agenum" type="text" />{{agenum}}
  </div>
</template>
  
<script>
    
    export default {
        data() {
          return {
            switchdata:'',
            input:'',
            textarea:'33=44\n78=00\n',
            checkedCities: ['上海', '北京'],
            cities: ['上海', '北京', '广州', '深圳'],
            tips:"",
            showtip:false,
            toptip:'',
            lefttip:'',
            setid:'',
            xuanfu:'提示文字',
            disabled:true,
            jisuan:true,
            jisuan1:true,
            imglist:[],
            checkboxlist:['one','two','three','four'],
            checkboxarr:[],
            agenum:''
          }
        },
        computed:{
          jisuans(){
            console.log('po')
            let arrimg=[]
            this.imglist.forEach(item=>{
              arrimg.push(item.picture)
            })
            return arrimg
          },
        },
        watch:{
          '$store.state.chinesedata':{
            immediate: true,
            handler: function (newval) {
              this.switchdata=this.utli.languagemethod()
              console.log(this.$store.state.chinesedata)
            },
            deep: true
          },
        },
        mounted(){
          console.log(this)
          this.getjie()
        },
        methods: {
          checkchange(e){
            console.log(e)
            console.log(this.checkedCities)
          },
          computedbtn(){
            this.jisuan=!this.jisuan
          },
          ssss(){
            var array=this.textarea.split('=')
            var list=[]
            array.forEach(item => {
              console.log(item)
              var ss=item.split('\n')
              list.push(ss)
            });
            console.log(list)
          },
          getjie(){
            this.api.findListBySubjectId({}).then(res=>{
              this.imglist=res.data
            })
          },
          mouseclick(v){
            console.log(`我触发了鼠标的${v}键`)
            console.log(v)
          },
          keyshijian(v){
            console.log(`我是${v},我触发了`)
          },
          mouseclickmode(v,s){
            this.setid=setTimeout(()=>{
              this.showtip=true
              console.log(v,s,this.showtip)
              if(s){
                  this.toptip=s.pageX-235 + 'px',
                  this.lefttip=s.pageY-70 + 'px'
              }
            },1000)
          },
          mouseleavecl(v,s){
             this.showtip=false
             this.toptip='',
              this.lefttip=''
              console.log(v)
              clearTimeout(this.setid)
          }
        }
    }
</script>
<style>

   .el-textarea__inner{ 
         resize: none; 
    }
    .tipstyle{
      width: 60px;
      background: rgb(90, 86, 86);
      color:#fff;
      font-size: 14px;
      text-align: center;
      border-radius: 3px;
      position: absolute;
    }
    .styleji{
      background: #fff;
      border-radius: 2px;
      border: 1px solid #ccc;
      padding: 2px 6px;

    }
</style>
