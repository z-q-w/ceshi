<template>
  <div>
    <canvas id="canvas" width="200" height="120"></canvas>
    <div style="font-size:24px;margin-bottom:10px">
        <span>{{shi}}</span>
        <span>:</span>
        <span>{{fen}}</span>
        <span style="font-size:10px">{{miao}}</span>
    </div>
  </div>
</template>
  
<script>
    export default {
        data() {
          return {
            canvas:'',
            cxt:'',
            shi:'',
            fen:"",
            miao:'',
            shijian:'',
          }
        },
        mounted(){
          this.canvas=document.getElementById('canvas')
          this.cxt=this.canvas.getContext('2d')
          this.renderCloke()
          setInterval(()=>{
            this.renderCloke()
          },1000)
        },
        methods: {
          renderCloke(){
            this.shijian= new Date()
            this.shi=this.shijian.getHours()
            this.fen=this.shijian.getMinutes()
            this.miao=this.shijian.getSeconds()
            this.shi=this.shi<10 ? '0'+this.shi:this.shi
            this.fen=this.fen<10 ? '0'+this.fen:this.fen
            this.miao=this.miao<10 ? '0'+this.miao:this.miao


            

            this.cxt.clearRect(0,0,200,150)
            this.cxt.save()
            this.cxt.translate(100,60)
            //Math.PI是180度   -Math.PI 逆时针旋转90度 让y轴在上面
            this.cxt.rotate(-Math.PI/2)
            this.cxt.save()
            //绘制表盘
            // this.cxt.beginPath()
            // this.cxt.arc(0,0,50,0,2*Math.PI)
            // this.cxt.strokeStyle='darkgrey'
            // this.cxt.lineWidth='2'
            // this.cxt.stroke()
            // this.cxt.closePath()

            //绘制时钟刻度
            for(var i=0; i<12; i++){
              this.cxt.rotate(Math.PI/6)
              this.cxt.beginPath()
              this.cxt.moveTo(41,0)
              this.cxt.lineTo(50,0)
              this.cxt.lineWidth=2
              this.cxt.strokeStyle='#fff'
              this.cxt.stroke()
              this.cxt.closePath()
            }
            this.cxt.restore()
            this.cxt.save()

            //绘制秒钟刻度
            for(var i=0; i<60; i++){
              this.cxt.rotate(Math.PI/30)
              this.cxt.beginPath()
              this.cxt.moveTo(45,0)
              this.cxt.lineTo(50,0)
              this.cxt.lineWidth=1
              this.cxt.strokeStyle='rgb(211, 197, 197)'
              this.cxt.stroke()
              this.cxt.closePath()
            }
            this.cxt.restore()
            this.cxt.save()

            let time= new Date()
            let hour=time.getHours()
            let min= time.getMinutes()
            let sec=time.getSeconds()
            //如果时间大于12就减去12
            hour=hour>12?hour-12:hour

            //绘制秒针  2*Math.PI/60计算每一秒的度数
            this.cxt.beginPath()
            this.cxt.rotate(2*Math.PI/60*sec)
            this.cxt.moveTo(-10,0)
            this.cxt.lineTo(38,0)
            this.cxt.lineWidth=1
            this.cxt.strokeStyle='red'
            this.cxt.stroke()
            this.cxt.closePath()

            this.cxt.restore()
            this.cxt.save()


            //绘制分针  
            this.cxt.beginPath()
            this.cxt.rotate(2*Math.PI/60*min+2*Math.PI/3600*sec)
            this.cxt.moveTo(-6,0)
            this.cxt.lineTo(32,0)
            this.cxt.lineWidth=2
            this.cxt.strokeStyle='rgb(211, 197, 197)'
            this.cxt.stroke()
            this.cxt.closePath()

            this.cxt.restore()
            this.cxt.save()

            //绘制时针  
            this.cxt.beginPath()
            this.cxt.rotate(2*Math.PI/12*hour+2*Math.PI/60/12*min)
            this.cxt.moveTo(-4,0)
            this.cxt.lineTo(24,0)
            this.cxt.lineWidth=3
            this.cxt.strokeStyle='rgb(211, 197, 197)'
            this.cxt.stroke()
            this.cxt.closePath()

            //画圆点
            // this.cxt.beginPath()
            // this.cxt.arc(0,0,2,0,2*Math.PI)
            // this.cxt.fillStyle='deepskyblue'
            // this.cxt.fill()
            // this.cxt.closePath()
            this.cxt.restore()
            this.cxt.restore()

          }
        },
    }
</script>