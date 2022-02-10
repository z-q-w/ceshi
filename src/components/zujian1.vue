<template>
	<div>
        <div>----------------我是子组件-----------------</div>
        <h1>我是子组件</h1>
		{{options}}
        <div>
            {{refchuanzhi}}
        </div>
        <div>
            <button @click="anniu">按钮一</button>
        </div>
        <div style="color:rgb(155, 247, 8)">
            {{message}} ,{{published}}
        </div>
        <div>----------------我是子组件-----------------</div>
	</div>
</template>

<script>
	export default {
        props:{
            message:String,
            published:Boolean
        },
		data() {
			return {
				options:"",
                refchuanzhi:'',
                halou:'houdunren.com'
			};
		},
		methods: {
			show: function(options) {
				this.options=options
				console.log(options)  //传递过来的值
			},
            hied(xixi){
                this.refchuanzhi=xixi
            },
            anniu(){
                console.log('wo shi an niu')
            }
		}
	}
</script>