
<!--src/components/sub/comment.vue-->
<!--子组件不用配置访问路径-->
<template>
	<div class='app-comment'>
		<div class="mui-card">
				<div class="mui-card-header"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<textarea placeholder='请吐槽最多120个字' maxlength='120' v-model='msg'></textarea>
						<mt-button type='primary' size='large' @click='addcomment'>发表评论</mt-button>
					</div>
				</div>
				<div class="mui-card-footer">
					<div class='cmt-list'>
						<div class='cm-item' v-for='(item,i) in list' :key='item.id'>
							<div>第{{i+1}}楼 发表时间:{{item.ctime|dateFilter}}</div>
							<div>{{item.content}}</div>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
	data(){
		return {
			pno:0,//页码 第几页
			pageSize:10,
			list:[],
			msg:''
		}
	},
	methods:{
		//添加评论
		addcomment(){
			// console.log(123);
			// 4-获取当前新闻的nid
			var nid=this.$route.query.nid;
			// console.log(nid);
			// 1:创建一个参数对象    测试
			//1.1 stringify 将 js对象转换成查询字符串
			var postData=this.qs.stringify({
				nid:nid,
				content:this.msg
			})
			// 练习：
			// 1-为添加评论绑定点击事件
			// 2-获取评论内容
			var m=this.msg;
			// trim()去除字符串两端空格
			var size=m.trim().length;
			// 3-判断评论内容不能为空"" "    "
			if(size==0){
				// 添加一个提示框
				Toast({
					message:'评论内容不能为空',
					position:'bottom',
					duration:3000
				});
				return;
			}
			// 5-发送ajax请求
			// 2:发送post请求
			var url='http://127.0.0.1:3000/';
				url+='addcomment';
			this.axios.post(url,postData).then(result=>{
			// 3:接受返回的数据
				// console.log(result.data);
				// 1：提示框 发表成功
				Toast(result.data.msg);
				// 2:清空评论区内容
				this.msg='';
				
						//因为你点击评论之后会触发created()里面的this.pno++ 所以此时pno变为了1，再次调用getMore()又会pno++，此时pno变为了2 所以拿不到数据 需要手动刷新 数据才显示
					//2.2清空页码
					this.pno=0;
					//2.3清空原有的数组
						//因为你始终查询的是第一页的数据，返回的对象始终是[{id:1,}]
						// 当你提交的时候再一次添加，但是id任然为1，所以数据就会报错 Duplicate keys detected: '70'. This may cause an update error.
						//解决办法 每一次发表数据 就清空data里面的list[]
					 this.list=[];
					// 3：立即查看评论结果
				this.getMore();
			})
			// 4:在created()调用	
		},
		//评论的分页显示
		getMore(){
			// console.log(123);
			this.pno++;
			var url='http://127.0.0.1:3000/';
				url+='getComment?nid='+this.$route.query.nid;
				url+='&pno='+this.pno;
				url+='&pageSize'+this.pageSize;
			this.axios.get(url).then(result=>{
				// console.log(result.data);
				var rows=this.list.concat(result.data.data);
				this.list=rows;
				// console.log(this.list);
			})
		}
	},
	created(){
		this.getMore();
		// this.addcomment();
	}
}
</script>
<style lang="">
	
</style>