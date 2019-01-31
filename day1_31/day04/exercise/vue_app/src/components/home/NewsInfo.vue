<template>
	<div class='app-newsinfo'>
		<!--<h1>新闻详情</h1>-->
		<!--当前新闻的详细信息-->
		<div class="mui-card">
				<div class="mui-card-header mui-card-media" :style=" 'height:40vw;background-image:url('+info.img_url+')' "></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!--定义过滤器 2019-01-20-->
						<p>Posted on {{info.ctime | dateFilter}}</p>
						<p style="color: #333;">{{info.content}}</p></p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
		</div>
		<!--评论-->
		<!--3:调用子组件-->
		<comment-box></comment-box>
	</div>
</template>
<script>
// 1:引入子组件
import comment from  '../sub/comment.vue';
export default {
	data(){
		return {
			//因为获取的数据是一条数据，所以用一个对象接收
			//多个数据才使用数组接收数据
			info:{}
		}
	},
	methods:{
		findNewsInfo(){
			// console.log(123);
			//1.获取参数
			//这里的nid要与Newslist跳转里面传的第五行数据参数名一致
			var nid=this.$route.query.nid;
			// console.log(nid);
			//2.发送ajax请求
			var url='http://127.0.0.1:3000';
			//这里的id是数据库里面数据的属性  请求数据时要与数据库一致
				url+='/findNewsInfo?id='+nid;
			this.axios.get(url).then(result=>{
				//3.获取返回数据 显示
				//  console.log(result.data);
				this.info=result.data.data[0];
				//console.log(this.info);
			})
		}
	},
	created(){
		// console.log(this.$route.query.nid);
		this.findNewsInfo();
	},//
	// 2:注册子组件
	components:{
		//标签名称 :子组件
		'comment-box':comment
	}
	
}
</script>
<style lang="">
	
</style>