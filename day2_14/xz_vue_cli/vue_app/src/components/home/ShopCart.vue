<template>
	<div id='app-cartlist'>
		<div class="mui-card">
				<div class="mui-card-header">
				<h3>购物车列表</h3>
				<h4>全选&nbsp;&nbsp;<input type='checkbox' @click='selectAll'></h4>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
						<!--循环遍历返回的数组对象中的购物车商品的信息-->
						<ul class="mui-table-view">
							<li class="mui-table-view-cell mui-media" v-for='(item,i) in list' :key='item.id'>
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" src="">
									<div class="mui-media-body cartlist" >
										<p class='mui-ellipsis'  style='border:1px solid #ccc;margin-bottom:5px; padding:10px; border-radius:5px;'><input type='checkbox'  :checked='cb'/>{{item.lname}} {{item.price|handlePrice}} <br/>
										<span>购买数量:{{item.count}}</span>&nbsp;&nbsp;
										<span>购买者编号:{{item.uid}}</span>
										<!--绑定自定义属性data-id，用来接收每一项所对应的id值   绑定list数组中所选中的对应项的索引值i-->
										<button style='margin-left:50px;margin-top:-16px;'
										 @click='delItem' :data-id='item.id' :data-idx='i'>删除</button>
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="mui-card-footer">
				<button >删除选中的商品</button>
				小计:¥3.00
				</div>
		</div>
	</div>
</template>
<script>
//引入Toast
import {Toast} from 'mint-ui';
//ShopCart.vue当组件创建成功发送 ajax请求
export default {
	data(){
		return {
			list:[], //保存购物车的列表
			cb:false //临时解决方法
		}
	},
	methods:{
		delItem(e){
			//1:获取当前购物车id----绑定自定义属性dataid
			 var id=e.target.dataset.id;
			 //1.1获取当前list选中数据在list中的索引值  ---方便后面点击删除按钮执行删除 list数组中所对应的item数据
			 var idx=e.target.dataset.idx;
			//  console.log(id,idx);
			//2:发送ajax请求
			 var url='http://127.0.0.1:3000/delCartItem';
			 	url+='?id='+id;
			this.axios.get(url).then(result=>{
			//3:获取返回对应结果 判断是否删除成功
				if(result.data.code==1)
					Toast(result.data.msg);
				else
					Toast(result.data.msg);			
			})
			//4:删除list对应购物车商品对象   删除list对象中所对应的商品
			//将数组中对应下标商品删除
			//spice(数组小标，个数)
			this.list.splice(idx,1);
		}
		,
		loadMore(){
			// console.log(111); 测试代码
			//ajax发出请求
			var url='http://127.0.0.1:3000/cartlist';
				url+='?uid=1';
			this.axios.get(url).then(result=>{
				// console.log(result.data.data);
				this.list=result.data.data;
				//  console.log(this.list);
				//完成操作作为列表每个对象添加属性cb
				//cb表示复选框的状态  true 当前商品选中
				//cb表示复选框状态 false 当前商品清除
				
				// console.log(this.list);
			})
		},
		selectAll(e){
			//1:获取当前全选复选框状态
			var cb=e.target.checked;
			//2:如果状态true
			this.cb=cb;
			// console.log(item.cb)
			//3:将数组中所有cb=true
			//4:如果状态false
			//5:将数组中所有cb=false
		}
	},
	created(){
		this.loadMore();
	}
}
</script>
<style lang="">


</style>