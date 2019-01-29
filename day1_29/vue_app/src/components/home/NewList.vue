<template>
	<div class='app-newslist'>
		<h3>新闻列表</h3>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in list' :key='item.id'>
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<!--新闻标题--> {{item.title}}
							<p class='mui-ellipsis'><!--新闻的时间--><span>{{item.ctime}}</span><span>点击{{item.point}}次数</span></p>
						</div>
					</a>
				</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return {
			list:[

			]
		}
	},
	methods:{
		getnewsList(){
			//1.发送ajax请求给服务器
			var url='http://127.0.0.1:3000/newslist';
			this.axios.get(url).then
			(result=>{
				//2.接收服务器返回结果
				//  console.log(result.data.data);
				//3.将结果保存在list
				 this.list=result.data.data;
			})
		}
	},
	created(){
		this.getnewsList();
	}
}
</script>
<style>
	/*日期和点击次数两端对齐*/
	.app-newslist li{
		height:70px;
	}
	.app-newslist li .mui-ellipsis{
		display:flex;
		font-size:12px;
		color:#00995f;
		justify-content:space-between;
	}
</style>