<template>
	<div>
		<div class="jiaju">
			<header>
				<img src="../../assets/images/titleLogo.png">
				<input type="text" class="seek">
			</header>
			<div class="info">
				<img src="https://m.wowdsgn.com/static/img/furniture.png">
			</div>
			<ul>
				<li @click="handleClick($store.state.categoryId,0)"><span>沙发</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,1)"><span>椅凳</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,2)"><span>桌几</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,3)"><span>床</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,4)"><span>柜架</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,5)"><span>餐桌</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,6)"><span>茶几和边桌</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,7)"><span>书桌</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,8)"><span>隔断</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
			</ul>
		</div>
		<div class="jiajuju">
			<div class="info">
				<img src="https://m.wowdsgn.com/static/img/household.png">
			</div>
			<ul>
				<li @click="handleClick($store.state.categoryId,0)"><span>灯具</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,1)"><span>用餐</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,2)"><span>时尚生活</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categroyId)"><span>烹饪</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,3)"><span>纺织品</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,4)"><span>家饰</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
				<li @click="handleClick($store.state.categoryId,5)"><span>卫浴</span><i class="icon-iconfontjiantou4 iconfont"></i></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import '../../assets/font_930300_nko4s52xf2a/iconfont.css'
	export default{
		methods:{
			handleClick(id,index){
				// console.log(this.$el.firstChild.lastChild.children[index].innerText);
				this.$router.push('/inner/'+id);
				this.$store.state.categoryTitle = this.$el.firstChild.lastChild.children[index].innerText;
			}
		}
	}
</script>
<style scoped lang="scss">
header{
	margin-left: 10px;
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
}
.info{
	padding:0 15px;
    position: relative;
    background: #fff;	
    margin: 0 auto;
    img{
    	margin-top: 14px;
    	display: block;
    	width:345px;
    	height: 115px;
    }
}
ul{
	padding: 0 15px;
}
li{
	line-height: 38px;
    color: #202020;
    font-size: 15px;
    padding:5px 0;
    color: #000;
    border-bottom: 1px solid #eaeaea;
    text-indent: 10px;
}
i{
	float: right;
	position: relative;
	right: 5px;
	color:#ccc;
}
</style>