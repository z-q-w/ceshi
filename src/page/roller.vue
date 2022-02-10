<template>
  <div>
        <input type="text" v-model="inputdata" @change="inputchenge" class="input_center" id="valueRGB" placeholder="请输入0-255之间的数字">
        <div class="num_span">
            <div v-for="(item,index) in inputindex.length" :key="index" style="display: inline-block;"> 
                <div :style="{transform: `translateY(${inputindex[index]})`,}" style="transition: all 2s cubic-bezier(0,0.3,0.01,1);">0123456789</div>
            </div>
        </div>
  </div>
</template>
  
<script>
    export default {
      data() {
        return {
            inputdata:'193',
            juli:'',
            inputindex:[],
            boxtrue:false,
            arr:''
        }
      },
      mounted() {
            this.arr=this.inputdata.split("")
            this.arr.forEach(item => {
                this.inputindex.push('-' +  20 * item + 'px')
            });
            console.log(this.inputindex)
      },
      methods: {
          inputchenge(e){
                this.inputindex=[]
                this.arr=this.inputdata.split("")
                this.arr.forEach(item => {
                    this.inputindex.push('-' +  20 * item + 'px')
                });
                console.log(this.inputindex)
          },
      },
    }
</script>
<style>
    .input_center{
        display: block;
        margin: 50px auto 0;
        
    }
    .num_span {
        border: 1px solid #911004;
        overflow: hidden;
        font-size: 20px;
        height: 20px;
        margin: 10px auto; 
        display: inline-block;
        transition: all 5s ease-out;
    }
    .num_span div {
        width: 20px;
        /* 书写模式*/
        writing-mode: vertical-rl;
        /* 控制行内字符的旋转*/
        text-orientation: upright;
    }
</style>