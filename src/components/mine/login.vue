<template>
	<div class="container">
		<header>
			<i @click="home()" class="iconfont icon-shouye b" ></i>
			<h2>登录</h2>
			<span @click="register()" class="a">注册</span>
		</header>
		<div class="box">
			<div class="mode">
				<ul>
					<router-link activeClass="on" to="/login" tag="li">密码登录</router-link>
					<router-link activeClass="on" to="/login/#" tag="li">短信登录</router-link>
				</ul>
			</div>
			<input type="text" name="username" ref="username" placeholder="请输入用户名"><br>
			<input type="password" name="password" ref="password" placeholder="请输入密码"><span>忘记密码？</span><br>
		</div>
		<button type="submit" @click="handleClick()" class="ab">确定</button>
		<div class="bottom">
			<span class="left">一个月内记住登录</span><span class="right">快速注册</span>
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
				  this.$store.state.isLogin = response.data;
				  if(this.$store.state.isLogin){
				  	this.$router.push('/mine');
				  }
				}).catch(err=>{
					console.log(err);
				});
			},
			home(){
				this.$router.push('/index/home');
			},
			register(){
				this.$router.push('/register');
			}
		},
		mounted(){

		}
	}
</script>
<style scoped lang="scss">
	.container{
		position: relative;
		background: #f5f5f5;
		width:100%;
		height: 700px;
	}
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
		margin-left: 13px;
	    width: 350px;
	    background-color: #fff;
	    position: relative;
	    margin-top: 15px;
	    height: 170px;
	    overflow: hidden;
	    .mode{
	    	ul{
	    		padding-top: 15px;
			    background: #FCFCFC;
			    height: 44px;
			    overflow: hidden;
			    li{
		    	    float: left;
	    	        margin: 0 45px;
				    font-size:15px;
				    padding: 0 12px;
				    color:#808080;
			    }
			    .on{
		    	    border-bottom: 3px solid #000;
				    color: #000;
				    height: 44px;
			    }
	    	}
	    }
    	input{
		    width: 100%;
		    height: 50px;
		    padding:0 10px;
		    box-sizing: border-box;
		    // border-bottom: 1px solid #EAEAEA;
		    border:1px solid white;
		    font-size: 14px;
		    color: #000;
		    font-family: 'PingFangSC-Regular';
		    outline: none;
    	}
    	input:nth-of-type(1){
    		border-bottom:1px solid #ccc;
    		background-clip: content-box;
    	}
    	span{
    		position: absolute;
    		display: block;
    		right: 20px;
    		font-size: 15px;
    		top:125px;
    	}
	}
	.ab{
    		margin: 0 auto;
		    vertical-align: middle;
		    width: 340px;
		    height: 44px;
		    background-color: #FFD444;
		    font-size: 14px;
		    position: absolute;
		    top: 240px;
		    margin-left: 18px;
    	}
    	.bottom{
    		margin-top: 70px;
    		.left{
				margin-left: 20px;
				font-size: 14px;
    		}
    		.right{
				margin-right: 20px;	
				font-size: 13px;
    		}
    	}
</style>