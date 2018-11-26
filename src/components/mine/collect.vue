<template>
	<div>
		<div class="head">
			<router-link tag="div" to="/home" class="headL"><i class="iconfont icon-shouye"></i></router-link>
			<p>我的收藏</p>
			<router-link tag="div" to="/mine" class="headR"><i class="iconfont icon-wode"></i></router-link>
		</div>
		<div class="No_text">
			<p>去收藏您喜欢的单品吧</p>
		</div>
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'collect',
	}
</script>

<style scoped lang="scss">
.head{
	position: relative;
	background-color: #fff;
	height: 44px;
	i{
		font-size: 20px;
		color: #888;
	}
	.headL{
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.headR{
		position: absolute;
		right: 20px;
		padding-top: 1px;
		top: 10px;
		i{
			font-size: 18px;
		}
	}
	p{
		font-size: 18px;
		text-align: center;
		line-height: 44px;
		font-weight: 600;
	}
}

.No_text{
	height: 90px;
	p{
		font-size: 14px;
		text-align: center;
		height: 90px;
		line-height: 90px;
		background-color: #f4f4f3;
	}
}
</style>
