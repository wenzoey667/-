<template>
	<div style="background: #f9f9f9; min-height: 100%;">
		<div class="head">
			<router-link tag="div" to="/home" class="headL"><i class="iconfont icon-shouye"></i></router-link>
			<p>个人信息</p>
			<router-link tag="div" to="/mine" class="headR"><i class="iconfont icon-wode"></i></router-link>
		</div>
		<div class="lookAtMe">
			<div class="wdsc">
				<span>头像</span>
				<i class="right iconfont icon-arrow"></i>
				<img src="https://m.wowdsgn.com/static/img/default_portrait.png" alt="" class="right">
			</div>
			<div class="wdsc">
				<span>昵称</span>
				<div class="wdsc_small">
					block_xun
				</div>
				<i class="right iconfont icon-arrow"></i>
			</div>
			<div class="wdsc">
				<span>个性签名</span>
				<i class="right iconfont icon-arrow"></i>
			</div>
			<div class="wdsc">
				<span>性别</span>
				<i class="right iconfont icon-arrow"></i>
			</div>
			<div class="wdsc">
				<span>年龄段</span>
				<div class="wdsc_small">
					保密
				</div>
				<i class="right iconfont icon-arrow"></i>
			</div>
			<div class="wdsc">
				<span>星座</span>
				<i class="right iconfont icon-arrow"></i>
			</div>
			<div class="wdsc">
				<span>职业</span>
				<i class="right iconfont icon-arrow"></i>
			</div>
		</div>

		<div class="lookAtMes">
			<div class="wdsc">
				<span>收货地址</span>
				<i class="right iconfont icon-arrow"></i>
			</div>

		</div>

		<div class="bottom"></div>
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'my',
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
.lookAtMe{
	padding-left: 10px;
	margin-top: 15px;
	background-color: #fff;
	.wdsc:nth-of-type(1){
		height:71px;
		span{
			display: inline-block;
			height: 70px;
			line-height: 70px;
		}
		img{
			width: 50px;
			margin-top: 10px;
			margin-right: 10px;
			vertical-align: middle;
		}
		i{
			height: 70px;
			line-height: 70px;
			font-size: 18px;
			color: #777;
			margin-right: 15px;
		}

	}
}
.lookAtMes{
	margin-top: 15px;
	background-color: #fff;
	padding-left: 10px;
}
	.wdsc{
		height: 50px;
		line-height: 50px;
		padding-left: 10px;
		font-size: 15px;
		border-bottom: 1px solid #eee;
		position: relative;
		.wdsc_small{
			position: absolute;
			right: 50px;
			top: 0;
			font-size: 13px;
			color: #aaa;
		}
		.phone{
			display: inline-block;
			padding-left: 120px;
			font-size: 10px;
			color: #ccc;
			line-height: 50px;
			height: 50px;
		}
		i{
			font-size: 18px;
			color: #777;
			margin-right: 15px;
		}
	}
.end{
	height: 50px;
	line-height: 50px;
	color: #FF7070;
	font-size: 16px;
	text-align: center;
	margin-top: 15px;
	background: #fff;
}
.bottom{
	height: 48px;
}
</style>
