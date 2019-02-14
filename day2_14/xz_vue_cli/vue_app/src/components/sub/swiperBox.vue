
<!--src/components/sub/swiperBox.vue-->
<template>
<div class='app-swiper'>
	<!-- <h3>轮播图</h3>-->
	<!--轮播图-->
			<mt-swipe :auto='2500'>
				<mt-swipe-item v-for='item in list' :key="item.id">
					<img :src='item.img_url'>
				</mt-swipe-item>
			</mt-swipe>
</div>
</template>
<script>

export default {
	data(){
		return {	
		}
	},
	//子组件向父组件要数据list
	props:['list']//接收父组件的数据
	//1:父组件发送 ajax请求返回图片列表
	//2:将列表传子组件
}
</script>
<style>
	.app-swiper .mint-swipe{/*父元素样式*/
		height:143px;
	}
	.app-swiper .mint-swipe img{
		width: 100%;/*图片的宽度占满父元素宽度*/
	}
</style>