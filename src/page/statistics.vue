<template>
  <div>
    <button @click="transhow=!transhow">
      点击测试transition组件{{contvalue}}
    </button>
    <world @cancel="cancelsd"></world>
    <transition name="fade">
      <div v-if="transhow">
        我是transition  vue提供的过度组件
        
      </div>
    </transition>
    <zujian ref="toast" :message="conment" published></zujian>
    <button @click="buttomsd">获取子组件的ref</button>
    
    <div @click="sss" @mousedown="(val)=>{shudown(val,'ddd')}" id="oooooooooo" class="pppppppppppp">
      ddd哈哈哈哈哈哈
    </div>
    <div @click="eeee('sdd',$event)" id="oooooooooo" class="pppppppppppp">
      eeeeeeeee
    </div>
    <input type="text" @input="inputs('ddd',$event)">
  </div>
</template>
  
<script>
    import world from '../components/HelloWorld.vue'
    import zujian from '../components/zujian1.vue'
    export default {
      components:{
        world,
        zujian
      },
      data() {
        return {
          conment:'我是父组件的值',
          transhow:true,
          contvalue:''
        }
      },
      created() {

      },
      methods: {
        cancelsd(v){
          console.log(v)
          this.contvalue=v
        },
        sss(event){
          // console.log(event,'我是点击事件')
        },
        buttomsd(){
          this.$refs.toast.show('你在干嘛呢我在传值')
          console.log(this.$refs.toast)
        },
        shudown(event,val){
          console.log(event.srcElement.className,'鼠标按下事件')
          console.log(val)
        },
        inputs(v,e){
          console.log(v)
          console.log(e)
        },
        eeee(v,e){
          console.log(v)
          console.log(e)
        }
      },
    }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>