<template>
	<div class='app-home'>
		<!--顶部导航条-->
		<!--轮播图-->
			<mt-swipe :auto='2500'>
				<mt-swipe-item v-for='item in list' :key='item.id'>
					<img :src='item.img_url'>
				</mt-swipe-item>
			</mt-swipe>
		<!--九宫格-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to='/Newslist'>
						<img src='../../img/menu1.png'/>
						<div class="mui-media-body">新闻资讯</div>
					</router-link>
			    </li> 
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to='/Goodslist'>
						<img src='../../img/menu2.png'/>
						<div class="mui-media-body">商品###0</div>
					</router-link>
			    </li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to='/ShopCart'>
						<img src='../../img/menu3.png'/>
						<div class="mui-media-body">购物车</div>
					</router-link>
			    </li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<img src='../../img/menu4.png'/>
						<div class="mui-media-body">支付</div>
					</a>
			     </li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<img src='../../img/menu5.png'/>
						<div class="mui-media-body">搜索</div>
					</a>
			    </li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<img src='../../img/menu6.png'/>
						<div class="mui-media-body">更多</div>
					</a>
			    </li>
		</ul>
		<!--tabbar底部导航条-->
		
	</div>
</template>
<script>
export default {
	data(){
		return {
					list:[
						// {id:1,img_url:'img/banner1.png'},
						// {id:2,img_url:'img/banner2.png'},
						// {id:3,img_url:'img/banner3.png'},
						// {id:4,img_url:'img/banner4.png'},
					]
				}
	},
	methods:{
		handleImage(){
			//1.发送ajax请求给服务器
			var url='http://127.0.0.1:3000/imageList';
			this.axios.get(url).then
			(result=>{
				//2.接收服务器返回结果
				//console.log(result);
				//3.将结果保存在list
				this.list=result.data;
			})	
		}
	},
	created(){
		this.handleImage();
	}
}
</script>
<style>
	.app-home .mint-swipe{/*父元素样式*/
		height: 143px;
	}
	.app-home .mint-swipe img{
		width: 100%;/*图片的宽度占满父元素宽度*/
	}
	.app-home .mui-grid-view.mui-grid-9{
		background-color:#fff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border:0 !important;
	}
	.app-home .mui-grid-view .mui-table-view-cell img {
		width:60px;
		height:60px;
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
		font-size:13px !important;
	}
</style>