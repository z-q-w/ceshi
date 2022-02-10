import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    //所有的数据都放在state中
    state:{
        const:0,
        pathlist:[],
        chinesedata:'',
    },

    //操作数据，唯一的通道是mutations
    mutations:{
        addNum (state,data) {
            state.pathlist.push(data)
            let obj ={}
            let arr=[]
            let list = state.pathlist
            for (let i = 0; i < list.length; i++) {
              if(!obj[list[i].name]){
                arr.push(list[i]);
                obj[list[i].name] = true;
              }  
            }
            state.pathlist=arr
        },
        chinesedata(state,data){
            console.log(data,'存储到vuex中')
            state.chinesedata=data
        },
        depathlist(state,index){
            state.pathlist.splice(index,1)
            console.log(state,index)
        }
    },

    //actions,可以来做异步操作，然后提交给mutations，而后再对state(数据)进行操作
    actions:{}
})