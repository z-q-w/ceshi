<template>
	<div>
		<center>哈哈</center>
		<div>
			{{ss}}
			<code>code</code><br>
			<em>em</em><br>
			<strong>strong</strong><br>
			<dfn>dfn</dfn><br>
			<samp>samp</samp><br>
			<kbd>kbd</kbd><br>
			<var>var</var><br>
			<cite>cite</cite><br>
			<big>sss</big><br>
			<i>i标签</i><br>
			<mark>milk突出文本</mark><br>
			<del>删除线</del><br>
			<ins>下划线</ins><br>
			<p>包含在 <sub> 标签和其结束标签 </sub> 中的内容将会以当前文本流中字符高度的一半来显示，但是与当前文本流中文字的字体和字号都是一样的</p>
			<p>包含在 <sup> 标签和其结束标签 </sup> 中的内容将会以当前文本流中字符高度的一半来显示，但是与当前文本流中文字的字体和字号都是一样的。</p>
		</div>
		<div>
			<bdo dir="rtl">我是bdo标签</bdo>
		</div>
		<hr />
		<div>
			<iframe 
			src="https://blog.csdn.net/m0_49016709/article/details/108009876" 
			frameborder="0"
			style="width:100%;height:200px;"
			scrolling="no"
			></iframe>
		</div>
		<hr />
		<embed height="200" width="1000" src="https://tb.53kf.com/code/client/364b9734c1baaebd590c64e000eb9bc73/1" />
		<hr />
		<frameset cols="25%,50%,25%">
			<frame scrolling="no" src="https://www.w3school.com.cn/tags/tag_embed.asp">
			<frame scrolling="no" src="https://tb.53kf.com/code/client/364b9734c1baaebd590c64e000eb9bc73/1">
			<frame scrolling="no" src="https://www.w3school.com.cn/tags/tag_embed.asp">
		</frameset>
		<hr />
		<select>
			<optgroup label="Swedish Cars">
				<option value ="volvo">Volvo</option>
				<option value ="saab">Saab</option>
			</optgroup>

			<optgroup label="German Cars">
				<option value ="mercedes">Mercedes</option>
				<option value ="audi">Audi</option>
			</optgroup>
		</select>
		<hr />
		<picture>
			<source media="(min-width:1000px)" srcset="https://edutest.zejicert.cn/files/system/2021/10-22/102550e0ba27419808.png">
			<source media="(min-width:465px)" srcset="https://thirdwx.qlogo.cn/mmopen/vi_32/ESfrRUqYXusedQgxQ79iaVDIyPiatr4Ta6iaiaGEFDibA0QdOOgficLIEiciaLuBDZBBkGLrSNVy7ySkwVs6G6dXXe8zBQ/132">
			<img src="https://devsource.zejicert.cn/public/zejicert/files/system/2021/10-13/1411197a82a5072865.jpg" alt="Flowers" style="width:auto;">
		</picture><br>
		<progress value="70" max="100"></progress><br>
		<p style="font-size:24px">标签呈现小号字体效果 <small>缩小</small> 都把文本的字体变小一号标签也可以嵌套</p>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		computed:{
			ss(){
				console.log('ppp,我触发了')
			}
		},
		methods:{
			
			haha(){
				console.log('wo chu fa le')
			}
		}
	}
</script>
<style>
	hr{
		margin: 20px 0px;
	}
	progress{
	    width: 168px;
	    height: 5px;
	    color:paleturquoise;
	    background:#7070ad;
	    border-radius: 0.1rem;
	}
	/* 表示总长度背景色 */
	progress::-webkit-progress-bar{     
	     background-color: #7070ad;
	     border-radius: 0.2rem;
	 }
	 /* 表示已完成进度背景色 */
	 progress::-webkit-progress-value{
	       background: paleturquoise;
	       border-radius: 0.2rem; 
	 }
</style>