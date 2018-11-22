<template>
	<div>
		<nav>
			<i class="iconfont icon-shouye One" slot="One" @click="theFirst"></i>
			<h3 class="Two" slot="Two">消息</h3>
			<i class="iconfont icon-wode Three" slot="Three" @click="theLast"></i>
		</nav>
		<content>
			<div class="top clear">
				<div class="icon left">
					<i class="iconfont icon-tongzhi"></i>
				</div>
				<div class="Wenzi left">
					<div class="clear xiahuaxian">
						<p class="wen left">尖叫精选</p>
						<p class="youjian right" @click="handleclick()">＞</p>
					</div>
					<div>
						<p class="neirong" @click="handleCl()">20%靠宜家，70%靠网淘，12万装出138m²日系阳光的家！</p>
						<p class="shijian">3小时前</p>
					</div>
				</div>
			</div>
		</content>
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
			},
			handleCl(){
				this.$router.push('/contents')
			},
			handleclick(){
				this.$router.push('/xijie')
			}
		}

	}
</script>

<style scoped>
	nav{
		position: relative;
		height: 44px;
		line-height: 44px;
		border-bottom: 1px solid #f5f5f5;
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
	.zhanwei{
		height: 20px;
	}
	content{
		padding: 20px 25px 20px 25px;
	}
	.top{
		overflow: hidden;
	}
	.icon{
		margin: 0 30px 0 25px;
		font-size: 18px;
		height: 40px;
		line-height: 40px;
	}
	.Wenzi{
		font-size: 18px;
		width: 300px;
	}
	.xiahuaxian{
		border-bottom: 1px solid #f5f5f5;
	}
	.wen{
		height: 40px;
		line-height: 40px;
	}
	.youjian{
		height: 40px;
		line-height: 40px;
	}
	.neirong{
		color: #65686C;
		font-size: 12px;
		height: 34px;
		margin: 13px 0;
	}
	.shijian{
		color: #65686C;
		font-size: 12px;
		height: 34px;
		margin: 13px 0;
	}
</style>
<style>
	
</style>
