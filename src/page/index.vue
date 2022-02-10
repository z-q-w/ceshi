<template>
  <div>
      <div class="indextop">
        <div class="left">{{chinese ? '王杰小学' : 'WangJieSchool'}}</div>
        <div class="right" @click="signout">
          {{chinese ? '王毅然' : 'YiyanWang'}}
        </div>
        <div class="right-right" @click="languagebtns">
          <span>{{chinese ? '中文' : 'English'}}</span>
        </div>
      </div>
      <div class="indexleft">
        <div>
          <canvastime></canvastime>
        </div>
        <div :class="[{'active':item.path==pagepath},'indexitem']" v-for="(item,index) in linstdata" :key="index" @click="indextab(item)"> 
          <!-- <img :src="item.icon" alt="" style="width: 20px;height: 20px;vertical-align: -7%;"> -->
          {{chinese ? item.name : item.english}}
        </div>
      </div>
      <div class="hw-body">
        <div class="navigationbox">
          <div :class="[{'navigationitemactive':item.path==pagepath},'navigationitem']" v-for="(item,index ) in navigation" :key="index" @click="indextab(item)">
            {{chinese ? item.name : item.english}}
            <img @click.stop="navigationde(index)" v-if="item.path!=pagepath" src="../assets/shanchu1.png" alt="" style="width:20px;height:20px;vertical-align: sub;margin-left:2px">
            <span v-if="item.path==pagepath" class="circular"></span>
          </div>
        </div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  import canvastime from '../components/canvasTime.vue'
  export default{
    components:{
      canvastime
    },
    data(){
      return{
        pagepath:'0',
        linstdata:[
          {
            name:'成长档案袋',
            english:'Growth Portfolio',
            path:"/archives",
            icon:require('../assets/icon1.png')
          },
          {
            name:'统计',
            english:'Statistics',
            path:'/statistics',
            icon:require('../assets/icon1.png')
          },
          {
            name:'活动管理',
            english:'Activity management',
            path:'/activity',
            icon:require('../assets/icon1.png')
          },
          {
            name:'数字滚动',
            english:'Digital scrolling',
            path:'/roller',
            icon:require('../assets/icon1.png')
          },
          {
            name:'测试变形',
            english:'Test deformation',
            path:'/bianxing',
            icon:require('../assets/icon1.png')
          },
          {
            name:'下载pdf',
            english:'download pdf',
            path:'/pdf',
            icon:require('../assets/icon1.png')
          },
          {
            name:'地图',
            english:'map',
            path:'/map',
            icon:require('../assets/icon1.png')
          },
          {
            name:'表格',
            english:'table',
            path:'/table',
            icon:require('../assets/icon1.png')
          },
          {
            name:'组件',
            english:'assembly',
            path:'/assembly',
            icon:require('../assets/icon1.png')
          },
          {
            name:'自定义指令',
            english:'custom',
            path:'/custom',
            icon:require('../assets/icon1.png')
          },
          {
            name:'全局api',
            english:'allapi',
            path:'/allapi',
            icon:require('../assets/icon1.png')
          },
        ],
        navigation:[],
        routerval:'',
        chinese:this.utli.languagemethod()
      }
    },
    watch:{
      '$store.state.pathlist':{
        immediate: true,
        handler: function (newval) {
          this.navigation=this.$store.state.pathlist
        },
        deep: true
      },
      $route: {
          handler: function(val, oldVal) {
            this.routerval=this.linstdata.find(item=> val.path==item.path)
            this.indextab(this.routerval)
          },
          // 深度观察监听
          deep: true,
          immediate: true
      }
    },
    mounted() {
      this.pagepath=this.$route.path
      let pathname=window.location.pathname  //解决刷新没有选中左边导航栏的问题
      this.routerval= this.linstdata.find(item=> pathname==item.path)   //过滤刷新后的路由
      this.indextab(this.routerval)
    },
    methods: {
      indextab(v){
        // this.$router.push(v.path)
        this.$router.push({
          path: v.path,
          query: {
          }
        })
        this.pagepath=v.path
        this.$store.commit("addNum", v)
      },
      languagebtns(){
       var yuyan = localStorage.getItem('language')
       console.log(yuyan)
        if(yuyan=='中'){
          this.$store.commit("chinesedata", '英')
          localStorage.setItem('language','英')
        }else{
          this.$store.commit("chinesedata", '中')
          localStorage.setItem('language','中')
        }
        this.chinese=this.utli.languagemethod()
      },
      navigationde(index){
        this.$store.commit("depathlist",index)
      },
      signout(){
        this.$alert('确定退出吗？', '退出登录', {
          confirmButtonText: '确定',
          callback: action => {
            if(action=='confirm'){
              this.cookie.del('ssotoken')
              this.$message({
                type: 'success',
                message: `退出成功`
              });
              this.$router.push({ path: "/login" });
            }
          }
        });
      }
    }
  }
</script>

<style>
  .indextop{
    position: fixed ;
    top: 0;
    left: 0;
    right: 0;
    line-height: 50px;
    height: 50px;
    background-color: #191a23;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.03);
    z-index: 999;
    display: flex;
    color: rgba(255, 255, 255, 0.7);
    padding-left: 20px;
    font-size: 18px;

    
  }
  .indextop .right{
    position: absolute;
    right: 0;
    margin-right: 100px;
  }
  .indextop .right-right{
      position: absolute;
      right: 0;
      margin-right: 10px;
  }
  .indexleft{
    background: #fafaff;
    width: 235px;
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    background-color: #191a23;
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, .05);
    transition: width .3s;
    user-select: none;
    z-index: 98;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
  }
  .indexitem{
    line-height: 40px;
  }
  .indexitem:hover{
    background: #56565f;
    transition:all 1s;
  }
  .hw-body{
    position: absolute;
    top: 50px;
    left: 235px;
    right: 0;
    bottom: 0;
    z-index: 99;
    padding: 20px;
    background:rgb(243,243,243);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .active{
    background-color: #384149;
    color: #fff;
  }
  .tuishu{
    position: absolute;
    top:40px;
    right: 80px;
    background: #191a23;
  }
  .navigationbox{
    display: flex;
    margin-bottom: 20px;
  }
  .navigationitem{
    padding: 0px 10px 0px 20px;
    background: #fff;
    margin-right: 20px;
    color: #8a8a8a;
    line-height: 30px;
  }
  .navigationitemactive{
    padding: 0px 10px 0px 20px;
    background: #fff;
    margin-right: 20px;
    color: rgb(45,183,245);
    /* line-height: 30px; */
  }
  .circular{
    width:12px;
    height:12px;
    margin-left:2px;
    background: rgb(45,183,245);
    display: inline-block;
    border-radius: 50%;
    vertical-align: -2%;
    margin:0 5px
  }
  
</style>
