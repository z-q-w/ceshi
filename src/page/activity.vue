<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <!-- <ssdddd :actions="actions" :listitem="item.name" @click="handlerButton(item)" >
        
      </ssdddd> -->
      <div class="tui-title" @click="switchChange">
        使用变量控制开关{{open}}
      </div>
      <ssdddd :actions="actions" :listitem="item.name" :open="open" @click="handlerButton(item)">
        <template v-slot:content>
          <div class="tui-list-item">使用变量控制开关</div>
        </template>
      </ssdddd>
    </div>
      

  </div>
</template>
  
<script>
  import ssdddd from '../components/swipeAction.vue'
    export default {
      components:{
        ssdddd
      },
        data() {
          return {
            open:false,
            actions: [
              {
                name: '删除',
                color: '#fff',
                fontsize: 16, //单位rpx
                width: 70, //单位px
                background: '#FD3B31'
              },
              {
                name: '修改',
                color: '#fff',
                fontsize: 16,
                width: 70,
                background: '#5677fc'
              },
              {
                name: '收藏',
                width: 70,
                fontsize: 16,
                color: '#fff',
                background: '#C8C7CD'
              }
            ],
            list:[
              {
                name:'张三向左滑动试试',
                aged:'12'
              },
              {
                name:'李四向左滑动试试',
                aged:'12'
              }
            ]
          }
        },
        created() {
          
        },
        methods: {
          handlerButton(e) {
            let index = e.index;
            let item = e.item;
            let menuTxt = ['删除', '修改', '收藏'][index];
            console.log(e)
          },
          switchChange: function(e) {
            this.open = !this.open;
          }
        },
    }
</script>
<style>
  .tui-list-item {
    padding: 40px 30px;
    display: flex;
    align-items: item;
  }
</style>
