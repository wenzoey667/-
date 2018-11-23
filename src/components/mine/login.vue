<template>
	<div>
		<header>
			<i class="iconfont icon-shouye b" ></i>
			<h2>登录</h2>
			<span class="a">注册</span>
		</header>
		<div class="box">
			<div class="mode">
				<ul>
					<li>密码登录</li>
					<li>短信登录</li>
				</ul>
			</div>
			<input type="text" name="username" ref="username" placeholder="请输入用户名"><br>
			<input type="password" name="password" ref="password" placeholder="请输入密码"><br>
			<input type="submit" @click="handleClick()">
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'login',
		data(){
			return{
				dataObj:{}
			}
		},
		methods :{
			handleClick(){
				console.log(this.$refs.username.value)
				console.log(this.$refs.password.value)
				axios({
				  method: 'post',
				  url: '/login',
				  data: {
				    'username':this.$refs.username.value,
				    'password':this.$refs.password.value
				  }
				}).then((response)=>{
				  console.log(response.data)
				  this.$store.state.isLogin = response.data;
				  console.log(this.$store.state.isLogin);
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
	header{
	    background: #fff;
	    height: 45px;
	    line-height: 45px;
	    -webkit-box-sizing: border-box;
	    position: relative;
	    border-bottom: 1px solid #f5f5f5;
	    h2{
			float: left;
			// padding-right: 150px;
		    text-indent: 140px;
		}
		.a{
			float: right;
			margin-right: 10px;
			font-size: 16px;
			color: #2C3030;
		}
		.b{
			float: left;
			margin-left: 10px;
		}
	}
	.box{
	    width: 400px;
	    background-color: #fff;
	    margin: 0 15px;
	    margin-top: 15px;
	    height: 170px;
	    .mode{
	    	ul{

	    	}
	    }
	}
</style>