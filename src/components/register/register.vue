<template>
	<form>
		<div class="form-group">
		    <label for="exampleInputUsername1">Username</label><input type="text" class="form-control" id="exampleInputUsername1" placeholder="username" ref="username">
		</div>
		<div class="form-group">
		    <label for="exampleInputPassword1">Password</label><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref="password">
		</div>
		<div class="form-group">
		    <label for="exampleInputMobile1">Mobile</label><input type="text" class="form-control" id="exampleInputMobile1" placeholder="Mobile" ref="mobile">
		</div>
		<button type="submit" class="btn btn-default" @click="handle()">Submit</button>
	</form>
</template>

<script>
	import axios from "axios";

	export default{
		name:'register',
		methods:{
			handle(){
				axios({
					method:'post',
					url:'/register/register',
					data:{
						username:this.$refs.username.value,
						password:this.$refs.password.value,
						mobile:this.$refs.mobile.value
					}
				}).then((res)=>{
					console.log(res.config.data)
				})
			}
		}
	}
</script>