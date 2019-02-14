<template>
	<div class="list">
		<h3>数据列表</h3>
		<ul class='ul'>
		<!-- 创建警告消息
			默认情况下 vue对数据排序操作
			vue指定属性 key='item.id' 进行排序，可以提高效率
			id不能重复
		-->
			<li v-for='item in list' :key='item.id'>{{item.id}}---{{item.name}}---{{item.age}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			list:[
				{id:1,name:'Kate',age:19},
				{id:2,name:'Jerry',age:21},
				{id:3,name:'Tomas',age:18},
			]
			}
		}
	}
</script>
<style>
	div.list{
		text-align:center;
	}
	ul.ul{
		list-style:none;
	}
</style>