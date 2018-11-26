<template>
	<div>
		<div class="head">
			<router-link tag="div" to="/home" class="headL"><i class="iconfont icon-shouye"></i></router-link>
			<p>优惠券</p>
			<router-link tag="div" to="/mine" class="headR"><i class="iconfont icon-wode"></i></router-link>
		</div>
		<div class="like">
			<div class="duiHuan">
				<input type="text" class="duiHuanText" placeholder="请输入兑换码">
				<input type="button" value="兑换" @click="clicks()" class="button">
			</div>
			<ul>
				<li class="clear">
					<div class="box left">
						700<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满2999减700</p>
						<p class="red">仅限部分商品</p>
						<p class="hui">2018.11.21至2018.12.05</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						269<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满1599减500</p>
						<p class="red">仅限部分商品</p>
						<p class="hui">2018.11.21至2018.12.05</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						150<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满1500减150</p>
						<p class="red">可用于全部商品</p>
						<p class="hui">2018.11.21至2018.12.21</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						100<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满499减100</p>
						<p class="red">仅限部分商品</p>
						<p class="hui">2018.11.21至2018.12.05</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						59<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满199减59</p>
						<p class="red">可用于全部商品</p>
						<p class="hui">2018.11.21至2018.12.05</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						50<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满299减50</p>
						<p class="red">可用于全部商品</p>
						<p class="hui">2018.11.21至2018.12.05</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						50<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满600减50</p>
						<p class="red">可用于全部商品</p>
						<p class="hui">2018.11.21至2018.12.21</p>
					</div>
				</li>
				<li class="clear">
					<div class="box left">
						10<span>元</span>
					</div>
					<div class="texts left">
						<p class="big">满10减10</p>
						<p class="red">可用于全部商品</p>
						<p class="hui">2018.11.21至2018.12.24</p>
					</div>
				</li>
			</ul>
		<div class="bottom"></div>
		</div>
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'gift',
		methods: {
			clicks(){
				alert('敬请期待')
			}
		}
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
.like{
	padding: 15px;
	background-color: #f3f3f3;
	.duiHuan{
		margin-bottom: 15px;
		.duiHuanText{
			width: 250px;
			height: 44px;
			border: 0;
			margin: 0;
			padding: 0;
			outline: none;
			box-sizing: border-box;
			padding-left: 8px;
			padding-right: 8px;
		}
		.button{
			width: 80px;
			height: 44px;
			border: 0;
			margin: 0;
			padding: 0;
			outline: none;
			box-sizing: border-box;
			background-color: #FFD444;
		}
	}
	ul{
		li{
			height: 100px;
			margin-bottom: 15px;
			.box{
				font-size: 30px;
				height: 100px;
				width: 100px;
				line-height: 100px;
				background-color: #FCFCFC;
				border-right: 1px dashed #ccc;
				text-align: center;
				span{
					font-size: 14px;
				}
			}
			.texts{
				height: 77px;
				background-color: #fff;
				width: 225px;
				padding-top: 23px;
				padding-left: 15px;
				p{
					height: 16px;
					font-size: 12px;
					line-height: 16px;
				}
				.red{
					color: red;
				}
				.hui{
					color: #777;
				}
				.big{
					height: 20px;
					font-size: 14px;
					line-height: 20px;
				}
			}
		}
	}
}
.bottom{
	height: 100px;
}
</style>
