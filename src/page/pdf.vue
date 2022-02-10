<template>
<!-- 
    第一个.将页面html转换成图片
    npm install --save html2canvas 
    第二个.将图片生成pdf
    npm install jspdf --save
    创建一个htmlToPdf.js文件在指定位置
    博客地址：https://blog.csdn.net/qq_37880968/article/details/94626001
 -->
  <div>
    <div >
		<el-table :data="tableData" style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column fixed="right"  label="操作" width="120">
                <template slot-scope="scope">
                    <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)"  type="text" size="small"> 下载 </el-button>
                </template>
            </el-table-column>
        </el-table>
	</div>
    <!-- <div  class="zong" id="demo">
        <p class="fff">{{tableData[indexs].date}}</p>
        <p class="sss">{{tableData[indexs].name}}</p>
        <p>{{tableData[indexs].address}}</p>
        <img :src="tableData[indexs].img" alt="" style="width: 500px;height:180px;">
    </div> -->
    <div  class="zong" id="demo">
      <h1 class="tlik">老年人能力评估表</h1>
      <el-table :data="tableData" style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column fixed="right"  label="操作" width="120">
                <template slot-scope="scope">
                    <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)"  type="text" size="small"> 下载 </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
  import htmlToPdf from '../config/htmlToPdf'
  export default {
    name: 'PdfDemo',
    data () {
      // 和导出pdf没关系
      return {
          indexs:0,
           tableData: [{
            date: '2016-05-02',
            name: '张三',
            address: '上海市庐阳区 1518 弄',
            img:require('../assets/11.png')
          }, {
            date: '2016-05-04',
            name: '李四',
            address: '上海市普陀区金沙江路 1517 弄',
            img:require('../assets/8.png')
          }, {
            date: '2016-05-01',
            name: '王二',
            address: '上海市闵行区合浦哦南路 1519 弄',
            img:require('../assets/3.jpg')
          }, {
            date: '2016-05-03',
            name: '时代的',
            address: '上海市宝山区哈鲁 1516 弄',
            img:require('../assets/icon1.png')
          }]
      }
    },
    methods: {
      deleteRow(index, rows) {
        console.log(index,rows)
        this.indexs=index
        htmlToPdf.downloadPDF(document.querySelector('#demo'), '商品详情' + this.tableData[index].name)
        console.log(index,rows)
      }
    }
  }
</script>

<style scoped>
	/* .zong{
		background-color: #fff;
		width: 1000px;
		margin: auto;
		padding: 40px;
		box-sizing: border-box;
        position: absolute;
        top: -9999px;
        left: -9999px
	} */
    .sss{
        font-size: 20px;
        color: aquamarine;
    }
    .fff{
        border: 1px solid red;
    }
	.logo{
		padding: 10px;
    	font-size: 15px;
		border:1px solid #000000
	}
	.logotop{
		display:flex;
		justify-content: space-between;
	}
	.logotopleft{
		width:300px;
		height:180px;
	}
	.logotopleftimg{
		width:300px;
		height:120px;
	}
	.logotopleftimg img{
		width:100%;
		height:100%;
	}
	.logotoplefttext{
		color:#000000;
		font-size:16px;
		font-weight: 600;
	}
	.logotopright{
		width:300px;
		height:120px;
	}
	.logotopright img{
		width:100%;
		height:100%;
	}
	.xiangqing{
		display:flex;
		justify-content: space-between;
		border-top:2px solid #000000;
		border-bottom:2px solid #000000;
		color:#000000;
		font-size:16px;
		font-weight: 600;
	}
	.xiangqing div{
		line-height:40px;
	}
  .tlik{
    text-align: center;
  }
</style>