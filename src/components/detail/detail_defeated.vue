<template>
	<div style="background-color: #eee;">

	</div>
</template>

<script>
	import '../../assets/font_928034_och37s6bfco/iconfont.css'
	import axios from 'axios';
	export default {
		name: 'detail',
		data(){
			return {
				name: '',
				money: '',
				content: '',
				detail: [],
				detailImg: [],
				like: []
			}
		},
		methods:{
			setdetail(val){
				this.$store.state.detail = val;	
				this.$router.push('/detail/' + val.productId)
			}
		},
		mounted(){
			axios.get('/recommend/item?skuId=' + this.$route.params.id + '&_=' + new Date().getTime()).then(val=>{
				this.like = val.data.data.skuInLists
				console.log(this.like)
				for (let i = 0; i < this.like.length; i++) {
					if (this.like[i].productId <= (parseInt(this.$route.params.id) + 1) && this.like[i].productId >= (parseInt(this.$route.params.id) - 1)) {
						console.log(i)
						console.log(this.like[i].productId)

					}
				}
			})
		},
		watch:{
			$route(){
				this.name = this.$store.state.detail.productTitle;
				this.money = this.$store.state.detail.sellPrice;
				axios.get('/itemdetail/skuInfos/' + this.$store.state.detail.productId + '?_=' + new Date().getTime()).then(val=>{
					this.detail = val.data.data.skuAttrPairs

				})
				axios.get('/itemdetail/spuInfos/' + this.$store.state.detail.parentProductId + '?_=' + new Date().getTime()).then(val=>{
					this.detailImg = val.data.data.itemDetailIntroVoList
				})
				axios.get('/recommend/item?skuId=' + this.$store.state.detail.productId + '&_=' + new Date().getTime()).then(val=>{
					this.like = val.data.data.skuInLists
				})
				document.documentElement.scrollTop = 0
			}
		}
	}
</script>

<style scoped lang="scss">
.title{
	background-color: #fff;
	display: flex;
	flex-direction: row;
	text-align: center;
	line-height: 44px;
	height: 44px;
	font-size: 16px;
	font-weight: 700;
	border-bottom: 1px solid #f0f0f0;
	div{
		flex: 1;
		i{
			font-weight: 500;
			padding-left: 20px;
			padding-right: 20px;
			font-size: 20px;
		}
	}
}
img{
	width: 100%;
}
.name{
	background-color: #fff;
	padding-top: 15px;
	padding-bottom: 10px;
	padding-left: 25px;
	padding-right: 25px;
	font-size: 16px;
}
.money{
	background-color: #fff;
	padding-bottom: 15px;
	padding-left: 25px;
	padding-right: 25px;
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 5px;
}
.chandi{
	margin-bottom: 10px;
}

.headline{
	padding-left: 25px;
	padding-right: 25px;
	margin-bottom: 5px;
	font-size: 16px;
	text-align: center;
}

.textval{
	padding-left: 25px;
	padding-right: 25px;
	margin-bottom: 5px;
	color: #666;
	font-size: 14px;
}

.forImg{
	margin-bottom: 5px;
}

.detail{
	margin-bottom: 15px;
	background-color: #fff;
	.detailTop{
		height: 50px;
		padding-left: 25px;
		font-size: 16px;
		line-height: 50px;
	}
	.detailbody{
		padding-left: 25px;
		padding-right: 25px;
		padding-bottom: 20px;
		ul{
			li{
				height: 33px;
				line-height: 33px;
				border-top: 1px solid #eee;
				color: #666;
				.d_name{
					display: inline-block;
					width: 98px;
				}
				.d_val{
					display: inline-block;
					height: 33px;
				}
			}
		}
	}
}

.likeTop{
	height: 42px;
	padding-top: 15px;
	padding-bottom: 15px;
	display: flex;
	justify-content: center;
	position: relative;
	> p{
		padding-top: 10px;
		padding-left: 5px;
		padding-right: 5px;
	}
	.lt_center{
		text-align: center;
		font-size: 16px;
		.cai2{
			font-size: 14px;
		}
	}
}

.l_num{
	width: 50%;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: 1px solid #eee;
	border-right: 1px solid #eee;
	padding-bottom: 30px;
	.l_text{
		padding: 25px 15px 3px; 
		height: 16px;
		line-height: 18px;
		overflow: hidden;
		color: #666;
		font-size: 14px;
	}
	.l_money{
		padding: 0 15px 0; 
		height: 16px;
		line-height: 18px;
		overflow: hidden;
		color: #222;
		font-size: 14px;
	}
}

.bottom{
	height: 46px;
}
</style>
