<template>
    <div style="width:100%;height:100%;position: absolute;" @mousemove="mousemovebtn" @mouseup="mouseupbtn">
        <div class="loginbox" @mousedown="mousedownbtn" id="drag">
            <div class="logintab">
                <div @click="logintabbtn(0)" :class="loginindex==0 ? 'loginteim':'unloginteim'">
                    登录
                </div>
                <div @click="logintabbtn(1)" :class="loginindex==1 ? 'loginteim':'unloginteim'">
                    注册
                </div>
            </div>
            <div v-if="loginindex==0">
                <div style="margin-top:70px">
                    <el-input placeholder="请输入手机号"  prefix-icon="el-icon-user-solid"  v-model="input1"></el-input>
                </div>
                <div style="margin-top:40px">
                    <el-input  placeholder="请输入密码" show-password prefix-icon="el-icon-lock" v-model="input2"></el-input>
                </div>
                <div style="margin-top:72px;text-align: center;">
                    <el-button @click="loginup" type="primary" style="width:400px">登录</el-button>
                </div>
            </div>
            <div v-if="loginindex==1">
                <div style="margin-top:40px">
                    <el-input placeholder="请输入手机号"  prefix-icon="el-icon-user-solid"  v-model="input1"></el-input>
                </div>
                <div style="margin-top:26px">
                    <el-input  placeholder="请输入密码" show-password prefix-icon="el-icon-lock" v-model="input2"></el-input>
                </div>
                <div style="margin-top:26px">
                    <el-input style="width:300px"  placeholder="验证码" prefix-icon="el-icon-key" v-model="codes"></el-input>
                    <button :class="btnText=='发送验证码' ? 'buggetyaz' : 'getyaz'" shape="circle" :plain="true" :disabled="disabled" @click="btnSend">{{btnText}}</button>
                </div>
                <div style="margin-top:50px;text-align: center;">
                    <el-button @click="registerup" type="primary" style="width:400px">注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    // import {name,age} from '../../../hd.js'
    import apo from '../../../hd.js'
    export default {
        data() {
          return {
              loginindex:'0',
              input1:'',
              input2:'',
              disabled: false,
              inviteeCode:'',//验证码
              btnText: "发送验证码",
              codes:"",
              dragsd:'',
              move:false,
              moveX:'',
              moveY:'',
              diffX:'',
              diffY:''
          }
        },
        mounted(){
            console.log(apo)
            apo.name='账上'
            console.log(apo.name)
            this.dragsd = document.getElementById('drag');
            var dsd=require('../../../hd.js')
            console.log(dsd)
        },
        methods: {
            logintabbtn(vl){
                this.loginindex=vl
            },
            loginup(){
                if(!this.utli.isMobile(this.input1)){
                    this.$message({
                        type: 'warning',
                        message: `手机号码格式错误`
                    });
                }else if(this.input2==''){
                     this.$message({
                        type: 'warning',
                        message: `请输入密码`
                    });
                }else{
                    this.$message({
                        type: 'success',
                        message: `登录成功`
                    });
                    this.cookie.set('ssotoken', 'sdfs', 3)
                    setTimeout(() => {
                        this.$router.push({ path: "/archives" });
                    }, 400);
                    localStorage.setItem('language','中')
                }
            },
            registerup(){
                if(!this.utli.isMobile(this.input1)){
                    this.$message({
                        type: 'warning',
                        message: `手机号码格式错误`
                    });
                }else if(this.input2==''){
                     this.$message({
                        type: 'warning',
                        message: `请输入密码`
                    });
                }else{
                    this.$message({
                        type: 'success',
                        message: `注册成功`
                    });
                     setTimeout(() => {
                        this.loginindex=0
                    }, 400);
                }
            },
            doLoop(seconds) {
				this.btnText = seconds + "s";
				let countdown = setInterval(() => {
					if (seconds > 0) {
						this.btnText = seconds + "s"
							--seconds;
					} else {
						this.btnText = "发送验证码";
						this.disabled = false;
						this.type = "primary";
						clearInterval(countdown);
					}
				}, 1000);
			},
			btnSend() {//获取验证码
				this.disabled = true;
				this.btnText = "请稍候...";
				this.type = "gray"
				setTimeout(() => {
					this.doLoop(60)
				}, 500)
			},
            mousedownbtn(e){  //鼠标按下
                console.log(e)
                this.move=true
                this.diffX=e.clientX - this.dragsd.offsetLeft;
                this.diffY=e.clientY - this.dragsd.offsetTop;
                console.log(this.diffX,this.diffY)
                console.log(e.clientX,this.dragsd.offsetLeft)
            },
            mousemovebtn(e){  //鼠标移动
                if(this.move){
                    this.moveX = e.clientX - this.diffX;
                    this.moveY = e.clientY - this.diffY;
                    console.log(this.moveX,this.moveY)
                    this.dragsd.style.left = this.moveX + 'px';
                    this.dragsd.style.top = this.moveY + 'px'
                }
            },
            mouseupbtn(e){   //鼠标放开
                this.move=false
            }
        },
    }
</script>
<style>
    .loginbox{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height:380px;
        border: 1px solid #ccc;
        padding: 40px;
        margin: auto;
        text-align: center;
    }
    .logintab{
        display: flex;
        justify-content: space-around;
        border-bottom: 2px solid rgb(241, 239, 239);
        line-height: 60px;
    }
    .loginteim{
        border-bottom: 3px solid rgb(84, 160, 255);
        margin-bottom: -2px;
        width: 80px;
        text-align: center;
        color: rgb(84, 160, 255);
    }
    .unloginteim{
        width: 80px;
        text-align: center;
        color: rgb(172, 165, 165);
    }
    .mobile{
		padding: 32rpx;
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.verification-btn{
		width:170rpx;
		height:48rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 5rpx 0rpx rgba(204,204,204,1);
		border-radius:6rpx;
		color:rgba(51,51,51,1);
		text-align: center;
		line-height: 48rpx;
		display: inline-block;
	}
	.verification{
		display: flex;
	}
	.getyaz{
		padding:5rpx 15rpx;
		font-size:22rpx;
		line-height:30rpx;
		border-radius: 8rpx;
        background: rgb(84, 160, 255);
		color: #fff !important;
        border: 0px;
        height: 40px;
        border-radius: 4px;
        width: 94px;
        opacity: 0.5;
	}
	.buggetyaz{
		padding:5rpx 15rpx;
		font-size:22rpx;
		line-height:30rpx;
		border-radius: 8rpx;
        background: rgb(84, 160, 255);
		color: #fff !important;
        border: 0px;
        height: 40px;
        border-radius: 4px;
        width: 94px;
	}
	.circle{
		width: 25rpx;
		height: 25rpx;
		border: 1px solid #CCCCCC;
		border-radius: 50%;
		margin-top: 6rpx;
	}
</style>
