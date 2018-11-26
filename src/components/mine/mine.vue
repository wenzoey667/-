<template>
	<div>
		<div style="background: #f9f9f9; min-height: 100%;" v-if="ismine">
			<div class="head">
				<p>我</p>
			</div>
			<router-link tag="div" to="mine/my" class="my clear">
				<img src="https://m.wowdsgn.com/static/img/default_portrait.png" alt="" class="left">
				<div class="my_name left">block_xun</div>
				<div class="go right"><i class="iconfont icon-arrow"></i></div>
			</router-link>
			<div class="order">
				<div class="orderName">全部订单</div>
				<ul>
					<router-link tag="li" class="clear" to="mine/lodingPayment/payment">
						<i class="iconfont icon-weibiaoti2fuzhi04"></i>
						<span>代付款<i class="right iconfont icon-arrow"></i></span>

					</router-link>
					<router-link tag="li" class="clear" to="mine/lodingPayment/shipments">
						<i class="iconfont icon-icon-test"></i>
						<span>代发货<i class="right iconfont icon-arrow"></i></span>

					</router-link>
					<router-link tag="li" class="clear" to="mine/lodingPayment/arrival">
						<i class="iconfont icon-icon3"></i>
						<span>代收货<i class="right iconfont icon-arrow"></i></span>

					</router-link>
					<router-link tag="li" class="clear" to="mine/lodingPayment/end">
						<i class="iconfont icon-weibiaoti2fuzhi06"></i>
						<span>代评论<i class="right iconfont icon-arrow"></i></span>

					</router-link>
					<router-link tag="li" class="clear" to="mine/quit">
						<i class="iconfont icon-tuihuanhuo"></i>
						<span>退换货<i class="right iconfont icon-arrow"></i></span>

					</router-link>
				</ul>
			</div>
			<div class="lookAtMe">
				<router-link tag="div" to="mine/collect" class="wdsc">
					<span>我的收藏</span>
					<i class="right iconfont icon-arrow"></i>
				</router-link>
				<router-link tag="div" to="mine/gift" class="wdsc">
					<span>我的礼券</span>
					<i class="right iconfont icon-arrow"></i>
				</router-link>
				<div class="wdsc" @click="phone()">
					<span>客服电话</span><span class="phone">周一至周五 9:00 ~ 18:30</span>
					<i class="right iconfont icon-arrow"></i>
				</div>
			</div>
			<div class="end" @click="handleClick()">退出登录</div>
			<div class="bottom"></div>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'mine',
		created(){
			console.log(this.$route.matched);
			if (this.$route.matched.length == 1) {
				this.ismine = true
			} else {
				this.ismine = false
			}
		},
		data(){
			return {
				ismine: false
			}
		},
		methods: {
			phone(){
				for (var i = 0; i < 100; i++) {
				alert('正在拨打电话......')
			}
				alert('拨打失败')
			},
			handleClick(){
				axios({
				  method: 'post',
				  url: '/outLogin'
				}).then((response)=>{
				  this.$store.state.isLogin = response.data;
				  console.log(response.data)
				  	this.$router.push('/login');
				}).catch(err=>{
					console.log(err);
				});
			}
		},
		beforeCreate(){
			if(this.$store.state.isLogin){
				return;
			}
			this.$router.push('/login');
		},
		watch: {
			$route(){
				console.log(this.$route.matched);
				if (this.$route.matched.length == 1) {
					this.ismine = true
				} else {
					this.ismine = false
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.head{
	background-color: #fff;
	height: 44px;
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
.order{
	padding-left: 15px;
	margin-bottom: 10px;
	background-color: #fff;
	.orderName{
		font-size: 15px;
		line-height: 50px;
		height: 50px;
		border-bottom: 1px solid #eee;
	}
	ul{
		li{
			height: 37px;
			padding-top: 13px;
			color: #2C3030;
			> i{
				line-height: 24px;
				font-size: 24px;
				height: 24px;
				display: inline-block;
				margin-right: 5px;
				vertical-align: middle;
			}
			span{
				height: 37px;
				display: inline-block;
				width: calc(100% - 35px);
				border-bottom: 1px solid #eee;
				i{
					font-size: 18px;
					color: #777;
					margin-right: 15px;
				}
			}
		}
	}
}
.lookAtMe{
	background-color: #fff;
	.wdsc{
		height: 50px;
		line-height: 50px;
		padding-left: 10px;
		font-size: 14px;
		border-bottom: 1px solid #eee;
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
