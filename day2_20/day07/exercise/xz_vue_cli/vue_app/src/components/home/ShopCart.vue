<template>
	<div id='app-cartlist'>
		<div class="mui-card">
				<div class="mui-card-header">
				<h3>购物车列表</h3>
				<h4>全选&nbsp;&nbsp;<input type='checkbox' @click='selectAll'  :checked='allcb'></h4>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
						<!--循环遍历返回的数组对象中的购物车商品的信息-->
						<ul class="mui-table-view">
							<li class="mui-table-view-cell mui-media" v-for='(item,i) in list' :key='item.id'>
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" src="">
									<div class="mui-media-body cartlist" >
										<p class='mui-ellipsis'  style='border:1px solid #ccc;margin-bottom:5px; padding:10px; border-radius:5px;'>
										<!-- 方法一: :checked='item.cb'   方法二: :checked='cb'-->
										<input type='checkbox' :checked='item.cb'  @click='modifyItem' :data-i='i'/>{{item.lname}} {{item.price|handlePrice}} <br/>
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
				<button @click='removeItem'>删除选中的商品</button>
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
			//  cb:false //方法二:临时解决方法
			allcb:false
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
				// this.list=result.data.data;
				var rows=result.data.data;
				//修改全局购物车的数量
				this.$store.commit('updateCount',rows.length);
				//  console.log(this.list);
				//完成操作作为列表每个对象添加属性cb
				//cb表示复选框的状态  true 当前商品选中
				//cb表示复选框状态 false 当前商品清除
				//方法一：
				for(var item of rows){
					item.cb=false;
				}
				this.list=rows;
				// console.log(this.list);
			})
		},
		selectAll(e){
			//1:获取当前全选复选框状态
			var cb=e.target.checked;
			this.allcb=cb;
			//2:如果状态true
			// console.log(this.list);
			//方法一:为每一个item添加一个cb属性
			for(var item of this.list){
				item.cb=cb;
			}
			//方法二：data中添加属性cb:false
			// this.cb=cb;
			//3:将数组中所有cb=true
			//4:如果状态false
			//5:将数组中所有cb=false
		},
		modifyItem(e){
			//1:获取当前元素下标
			var idx=e.target.dataset.i;
			// console.log(i);
			//2:将下标对象数组中元素cb值修改为当前复选状态
			var checked=e.target.checked;
			//3:将数组中对应cb状态修改
			this.list[idx].cb=checked;
			// console.log(this.list)
			//4:统计购物车中商品选中数量==list.length
			var num=0;
			for(var item of this.list){
				if(item.cb)
				num++;
			}
			console.log(num);
			if(num==this.list.length)
			//5:将全选状态true
			this.allcb=true;
			else
			this.allcb=false;
			console.log(this.allcb);
		},
		removeItem(){
			//0:创建字符串,为了后续拼接字符串
			var html='';
			//1:遍历数组中元素  获取选中状态(item.cb==true)的id值
			for(var item of this.list){
			//2:判断cb==true
				if(item.cb==true)
			//3:保存id 拼字符串
				html+=item.id+',';
			}
			//去掉最后一个,号
				// var arr=html.split(',');
				// //去掉最后一个为空的数组值
				// arr.pop();
				// //将每个数组值按,拼接
				// html=arr.join(',');
				html=html.substring(0,html.length-1);
			// console.log(html);
			//4:发送ajax请求 删除多个商品
			var url='http://127.0.0.1:3000/removeMItem';
				url+='?ids='+html;
				//4.1删除数据库中的每一个购物车中的item
			this.axios.get(url).then(result=>{
				// console.log(result.data.code);
				Toast(result.data.msg);
				//4.2将list数组中的选中的每一个item删除掉
				this.loadMore();
				
			});
		}
	},
	created(){
		this.loadMore();
	}
}
</script>
<style lang="">


</style>