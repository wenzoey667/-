<template>
	<form action="/register" method="post">
		用户名:<input type="text" name="username" ref="username"><br>
		密码:<input type="password" name="password" ref="password"><br>
		手机号:<input type="text" name="mobile" ref="mobile"><br>
		<input type="submit" @click="handleClick()">
	</form>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'register',
		data(){
			return{
				dataObj:{}
			}
		},
		methods :{
			handleClick(){
				console.log(this.$refs.username.value)
				console.log(this.$refs.password.value)
				console.log(this.$refs.mobile.value)
				axios({
				  method: 'post',
				  url: '/register',
				  data: {
				    'username':this.$refs.username.value,
				    'password':this.$refs.password.value,
				    'mobile':this.$refs.mobile.value
				  }
				}).then(function(response) {
				  console.log(response)
				}).catch(err=>{
					console.log(err);
				});
			}
		},
		mounted(){

		}
	}
</script>
<style scoped lang="scss">
	
</style>