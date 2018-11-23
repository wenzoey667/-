<template>
	<div>
		<nav>
			<div class="logoAndSeek">
				<img src="../../assets/images/titleLogo.png">
				<input type="text" class="seek">
				<ul>
					<router-link activeClass="end" to="/index/home" tag="li">推荐</router-link>
					<router-link activeClass="end" to="/index/recommen" tag="li">家具</router-link>
					<router-link activeClass="end" to="/index/homedesign" tag="li">家居</router-link>
					<router-link activeClass="end" to="/index/activity" tag="li">活动</router-link>
				</ul>
			</div>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: 'heads',
		beforeCreate(){
			axios.post('/isLogin').then(res=>{
				console.log('aa');
				console.log(res.data);
				this.$store.state.isLogin = res.data;
			})
		}
	}
</script>

<style scoped>
.logoAndSeek{
	padding-left: 10px;
	padding-right: 10px;
}
img:nth-of-type(1){
	vertical-align: middle;
	width: 65px;
	margin-top: 3px;
	display: inline-block;
}
.seek{
	border: 0;
	outline: none;
	display: inline-block;
	width: 260px;
	height: 28px;
	line-height: 28px;
	vertical-align: middle;
	background-color: #F5F5F5;
	border-radius: 10px;
	margin-left: 8px;
	margin-bottom: 2px;
	padding-left: 10px;
	margin-top: 10px;
}
ul{
	display: flex;
	flex-direction: row;
}
li{
	flex: 1;
	text-align: center;
	height: 40px;
	font-size: 14px;
	line-height: 40px;
	position: relative;
}
.end::before{
	display: block;
	content: '';
	width: 50px;
	height: 3px;
	position: absolute;
	background-color: #202020;
	bottom: 0;
	left: 50%;
	margin-left: -25px;
}
</style>
