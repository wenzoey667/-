<template>
	<div>
		<div>
			<div class="head">
				<router-link tag="div" to="/mine" class="headL"  style="transform: rotateZ(180deg);"><i class="iconfont icon-arrow"></i></router-link>
				<p>我的订单</p>
				<router-link tag="div" to="/home" class="headR"><i class="iconfont icon-shouye"></i></router-link>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'quit'
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
.bottom{
	height: 1px;
}
</style>
