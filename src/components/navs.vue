<template>
	<nav>
			<ul>
				<router-link activeClass="end" to="/index/home" tag="li">
					<div>
						<p class="iconf"><i class="iconfont icon-shouye"></i></p>
						<p class="text">首页</p>
					</div>
				</router-link>
				<router-link activeClass="end" to="/category" tag="li">
					<div>
						<p class="iconf"><i class="iconfont icon-fenlei"></i></p>
						<p class="text">分类</p>
					</div>
				</router-link>
				<router-link activeClass="end" to="/cart" tag="li">
					<div>
						<p class="iconf"><i class="iconfont icon-tubiaozhizuomoban"></i></p>
						<p class="text">购物</p>
						<h5 v-if="$store.state.count>0">{{$store.state.count}}</h5>
					</div>
				</router-link>
				<router-link activeClass="end" to="/infos" tag="li">
					<div>
						<p class="iconf"><i class="iconfont icon-xinfeng"></i></p>
						<p class="text">消息</p>
					</div>
				</router-link>
				<router-link activeClass="end" to="/mine" tag="li">
					<div>
						<p class="iconf"><i class="iconfont icon-wode"></i></p>
						<p class="text">我的</p>
					</div>
				</router-link>
			</ul>
	</nav>
</template>

<script>
	import '../assets/font_928034_och37s6bfco/iconfont.css';
	export default {
		name: 'navs',
		data(){
			return{
				// count : 0
			}
		},
		mounted(){
			var num = 0;
			this.$http.get('/static/cart/cart.json').then(res=>{
				res.body.forEach(val=>{
					num += val.count;
				})
				this.$store.state.count = num;
			})
		}
	}
</script>

<style scoped>
nav{
	padding-top: 2px;
	position: fixed;
	bottom: 0;
	box-shadow: 0 -0.5px 0 0 #ddd;
	width: 100%;
}
.backgrounds{
	height: 80px;
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
.iconf{
	height: 23px;
}
.text{
	height: 18px;
}
li{
	padding-top: 2px;
	flex: 1;
	text-align: center;
	background-color: #fff;
	height: 44px;
	font-size: 12px;
	position: relative;
}
li:nth-of-type(3){
	position: relative;
}
p{
	color: #444;
}
.end p{
	color: #000;
}
.end .text{
	font-weight: 600;
}
h5{
	position: absolute;
	line-height: 15px;
	width: 15px;
	text-align: center;
	background-color: #FFD444;
	z-index: 2;
	top: 2px;
	right: 22px;
	border-radius: 50%;
}
</style>
