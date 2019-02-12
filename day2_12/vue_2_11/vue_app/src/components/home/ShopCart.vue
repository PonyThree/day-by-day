<template>
	<div id='app-cartlist'>
		<div class="mui-card">
				<div class="mui-card-header">购物车列表</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
						<!--循环遍历返回的数组对象中的购物车商品的信息-->
						<ul class="mui-table-view">
							<li class="mui-table-view-cell mui-media">
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" src="">
									<div class="mui-media-body cartlist" >
										<p class='mui-ellipsis' v-for='(item,i) in list' :key='item.id' style='background-color:#faf;border:1px solid #eee;margin-bottom:10px;'><input type='checkbox'/>{{item.lname}} {{item.price|handlePrice}} <br/>
										<span>购买数量:{{item.count}}</span>&nbsp;&nbsp;
										<span>购买者编号:{{item.uid}}</span>
										<button style='margin-left:60px'>删除</button>
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			list:[]
		}
	},
	methods:{
		cartlist(){
			// console.log(111); 测试代码
			//ajax发出请求
			var url='http://127.0.0.1:3000/cartlist';
				url+='?uid=1';
			this.axios.get(url).then(result=>{
				// console.log(result.data.data);
				this.list=result.data.data;
				// console.log(this.list);
			})
		}
	},
	created(){
		this.cartlist();
	}
}
</script>
<style lang="">


</style>