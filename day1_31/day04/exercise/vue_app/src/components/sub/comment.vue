
<!--src/components/sub/comment.vue-->
<!--子组件不用配置访问路径-->
<template>
	<div class='app-comment'>
		<div class="mui-card">
				<div class="mui-card-header"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<textarea placeholder='请吐槽最多120个字' maxlength='120'></textarea>
						<mt-button type='primary' size='large'>发表评论</mt-button>
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
export default {
	data(){
		return {
			pno:0,
			pageSize:5,
			list:[]
		}
	},
	methods:{
		getMore(){
			// console.log(123);
			this.pno++;
			var url='http://127.0.0.1:3000/';
				url+='getComment?nid=5'
				url+='&pno='+this.pno;
				url+='&pageSize'+this.pageSize;
			this.axios.get(url).then(result=>{
				// console.log(result.data);
				var rows=this.list.concat(result.data.data);
				this.list=rows;
				console.log(this.list);
			})
		}
	},
	created(){
		this.getMore();
	}
}
</script>
<style lang="">
	
</style>