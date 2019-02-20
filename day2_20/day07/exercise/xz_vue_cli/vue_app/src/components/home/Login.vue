<template>
	<div class="mui-card" id='app-login'>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<form>
					用户名:<input type='text' name='uname' v-model='uname'><br/>
					密码:<input type='password' name='upwd' v-model='upwd'><br/>
					<input type='button' value='登录' @click='butLogin'>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
//单独引入 Toast
import {Toast} from 'mint-ui'
export default {
	data(){
		return {
			uname:'',
			upwd:''
		}
	},
	methods:{
		butLogin(){
			//0:为button绑定点击事件
			//1:获取用户输入用户名和密码
			var u=this.uname;
			var p=this.upwd;
			// console.log(uname,upwd);
			//2:验证密码和用户名是否为空
			var reg=/^[a-z0-9]{3,12}$/i;
			if(!reg.test(u)){
				Toast({
				message:'用户名格式不正确，请检查',
				position:'top'
				});
				return;
			}
			//3:发送ajax请求
			var url='http://127.0.0.1:3000';
				url+='/login?uname='+u;
				url+='&upwd='+p;
			this.axios.get(url).then(result=>{
				//4：成功 跳转home
				// console.log(result.data);
				// console.log(result.data.code);
				if(result.data.code==1){
					this.$router.push('/Home');	
				}
				//5:失败  显示提示框
				else {
					Toast({
					message:result.data.msg,
					position:'top'
					});
				}
				
			})
		}
	}
}
</script>
<style lang="">
	
</style>