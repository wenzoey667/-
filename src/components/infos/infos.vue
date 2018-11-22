<template>
	<div>
		<nav>
			<i class="iconfont icon-shouye One" slot="One" @click="theFirst"></i>
			<h3 class="Two" slot="Two">消息</h3>
			<i class="iconfont icon-wode Three" slot="Three" @click="theLast"></i>
		</nav>

	</div>
</template>

<script>
	import nav from "./nav"
	import axios from "axios";
	import '../../assets/font_928034_och37s6bfco/iconfont.css'
	export default {
		name:'infos',
		methods:{
			theFirst(){
				this.$router.push('/index/home')
			},
			theLast(){
				this.$router.push('/mine')
			}
		},
		mounted(){
			axios.get()
		}

	}
</script>

<style scoped>
	nav{
		position: relative;
		height: 44px;
		line-height: 44px;
	}
	.One{
		position: fixed;
		top: 0;
		left: 10px;
	}
	.Two{
		text-align: center;
		font-size: 18px;
	}
	.Three{
		position: fixed;
		top: 0;
		right: 10px;
	}
</style>
<style>
	
</style>
