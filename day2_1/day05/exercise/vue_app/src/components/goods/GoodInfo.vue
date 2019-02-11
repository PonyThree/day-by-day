<template>
	<div class='app-goodinfo'>
		<!--轮播图-->
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!--3:调用子组件-->
						<!--list要与子组件props里面的参数list一致   rows就是父组件里面ajax获取的数据 这样就可以传递数据给子组件了-->
						<swiper-box :list='rows'></swiper-box>
						 <!--1:子组件中添加轮播图的标签
						 2：样式
						 3:循环 list-->
					</div>
				</div>
		</div>
		<!--商品信息-->
		<div class='product-info'>
			<div class="mui-card">
				<div class="mui-card-header">{{info.lname}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>销售价:¥{{info.price}}</p>
						购买数量:
						<div class="mui-numbox">
							<button class="mui-btn mui-btn-numbox-minus" type="button" @click='reduce'>-</button>
							<input class="mui-input-numbox" type="number"  v-model='val'/>
							<button class="mui-btn mui-btn-numbox-plus" type="button" @click='add'>+</button>
						</div>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type='danger' size='large'>加入购物车</mt-button>
				</div>
			</div>
		</div>
		<!--商品参数-->
	</div>
</template>
<script>
//1:引入子组件
import swiperBox from '../sub/swiperBox.vue';
export default {
	data(){
		return{
			rows:[],//创建数组保存子组件显示数据 
			info:{}, //创建对象用来保存商品的详细信息 lname price
			val:1
		}
	},
	methods:{
		add(){
			this.val++;
		},
		reduce(){
			if(this.val>1){
			this.val--;
			}
		},
		getImages(){
			 var url='http://127.0.0.1:3000/imageList';
				 this.axios.get(url).then(result=>{
					//  console.log(result.data);
					 this.rows=result.data;
					//  console.log(this.rows);
				 })
		},
		findGoodInfo(){
			//获取参数pid
			var pid=this.$route.query.pid;
			// console.log(pid);
			// 发送ajax请求
			var url='http://127.0.0.1:3000/findProduct';
				url+='?pid='+pid;
			this.axios.get(url).then(result=>{
				// console.log(result.data.data[0]);
				this.info= result.data.data[0];
				console.log(this.info);

			})
		}
	},
	//2：注册子组件
	components:{
		'swiper-box':swiperBox
	},
	/*
	*	练习：
	*	1:data 添加属性 info:{} 因为只有一条数据，所以是一个对象
	*	2:methods 添加函数 findGoodInfo 输出测试
	*	3:created 调用findGoodInfo
	*
	*
	*/
	created(){
		this.getImages();
		this.findGoodInfo();
	}
}
</script>
<style lang="">
	
</style>