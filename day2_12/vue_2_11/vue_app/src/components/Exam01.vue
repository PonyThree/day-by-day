<!-- components/Exam01.vue-->
<template>
	<!-- 先创建一个根元素-->
	<div class='app-exam01'>
		<h3>练习组件创建</h3>
		<!--新闻列表跳转-->
		<h1 @click='jump1'>跳转到Newslist.vue页面</h1>
		<!--商品列表跳转-->
		<h1 @click='jump2'>跳转到商品列表页面</h1>
		<!--带参数的新闻列表跳转-->
		<h1 @click='jump3'>跳转到新闻列表页面---带参数</h1>
	</div>
</template>
<script>
	export default {//组件默认的导出对象
		data(){
			return {}//组件操作数据
		},
		methods:{
			jump1(){
				this.$router.push('/NewsList');
			},
			jump2(){
				this.$router.push('/Goodslist');
			},
			jump3(){
				this.$router.push('/Newslist?nid=6')
			}
		}
	}
</script>
<style>
	.app-exam01 h3{
		color:red;
		font-size:16px;
	}
</style>