<template>
	<div>
		<div class="head">
			<router-link tag="div" to="/mine" class="headL"  style="transform: rotateZ(180deg);"><i class="iconfont icon-arrow"></i></router-link>
			<p>我的订单</p>
			<router-link tag="div" to="/home" class="headR"><i class="iconfont icon-shouye"></i></router-link>
		</div>
		<ul class="next" style="background: #f9f9f9; min-height: 100%;">
			<router-link tag="li" to="all" activeClass="end">全部</router-link>
			<router-link tag="li" to="payment" activeClass="end">待付款</router-link>
			<router-link tag="li" to="shipments" activeClass="end">待发货</router-link>
			<router-link tag="li" to="arrival" activeClass="end">待收货</router-link>
			<router-link tag="li" to="end" activeClass="end">待评论</router-link>
		</ul>
		<router-view></router-view>
		<!-- <div class="bottom"></div> -->
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'lodingPayment',
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

.my{
	background-color: #fff;
	height: 70px;
	margin-top: 15px;
	margin-bottom: 15px;
	img{
		width: 50px;
		height: 50px;
		margin: 15px 10px;
	}
	.my_name{
		margin-top: 10px;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
	}
	.go{
		height: 50;
		line-height: 50px;
		font-size: 20px;
		margin-top: 10px;
		padding-right: 20px;
		color: #aaa;
	}
}


.next{
	height: 40px;
	display: flex;
	li{
		flex: 1;
		text-align: center;
		line-height: 40px;
		font-size: 14px;
		color: #555;
	}
}

.end{
	box-sizing: border-box;
	border-bottom: 3px solid #444;
}

.lookAtMe{
	padding-left: 10px;
	margin-top: 15px;
	background-color: #fff;
}
.bottom{
	height: 48px;
}
</style>
