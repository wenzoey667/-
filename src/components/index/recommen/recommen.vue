<template>
	<div class="bd">
		<mt-swipe :auto="0">
		  	<mt-swipe-item v-for="data,index in datalist" :key="data.moduleId">
				<img :src="data.bannerImgSrc"/>
		  	</mt-swipe-item>
		</mt-swipe>
		<div class="gonglue">
			<h1>家装修攻略</h1>
			<h3>现代家居新风貌</h3>
			<div id="swiper">
				<ul class="sL">
					<router-link to="/detail/:id" tag="li" v-for="data,index in dataarr" :key="data.moduleId">
						<img :src="data.productImg">
						<div class="info">
							<p>{{data.productTitle}}</p>
							<span>￥{{data.originalPrice}}</span>
						</div>
					</router-link>
				</ul>
			</div>
			<div class="g_bottom">
				查看全部 ▶
			</div>
		</div>
		<div class="tuijian">
			<h1>品牌推荐</h1>
			<h3>国际大牌 有好货</h3>
			<div class="img">
				<img :src="dataall.bannerImgSrc">
			</div>
			<ul class="sL">
				<router-link to="/detail/:id" tag="li" v-for="data,index in dataarr" :key="data.moduleId">
					<img :src="data.productImg">
					<div class="info">
						<p>{{data.productTitle}}</p>
						<span>￥{{data.originalPrice}}</span>
					</div>
				</router-link>
			</ul>
		</div>
		<div class="remen">
			<h1>热门分类</h1>
			<ul class="sL">
				<router-link to="/detail/:id" tag="li" v-for="data,index in dataa" :key="data.moduleId">
					<img :src="data.bannerImgSrc">
				</router-link>
			</ul>
		</div>
		<div class="a">
			<h1>搭配茶几</h1>
			<h3>细节让你的家美丽秘迷人</h3>
			<ul class="sL">
				<router-link to="/detail/:id" tag="li" v-for="data,index in datab" :key="data.moduleId">
					<img :src="data.productImg">
					<p>{{data.productName}}</p>
					<span>￥{{data.originalPrice}}</span>
				</router-link>
			</ul>
		</div>
		<div class="a">
			<h1>精神栖居</h1>
			<h3>在书房里表达生活意趣</h3>
			<ul class="sL">
				<router-link to="/detail/:id" tag="li" v-for="data,index in datab" :key="data.moduleId">
					<img :src="data.productImg">
					<p>{{data.productName}}</p>
					<span>￥{{data.originalPrice}}</span>
				</router-link>
			</ul>
		</div>
		<div class="a b">
			<h1>蜗居衣架</h1>
			<h3>衣柜「爆炸」的解决方案</h3>
			<ul class="sL">
				<router-link to="/detail/:id" tag="li" v-for="data,index in datab" :key="data.moduleId">
					<img :src="data.productImg">
					<p>{{data.productName}}</p>
					<span>￥{{data.originalPrice}}</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Vue from "vue"
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css'
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		name: 'recommen',
		data(){
			return{
				datalist:[],
				dataarr:[],
				dataall:[],
				datamain:[],
				dataa:[],
				datab:[]
			}
		},
		mounted(){
			axios.get("/v2/page?pageId=1&tabId=10005&_=1542777804750").then(res=>{
				this.datalist = res.data.data.modules[0].moduleContent.banners;
				this.dataarr =  res.data.data.modules[1].moduleContent.products;
				this.dataall = res.data.data.modules[2].moduleContent.banners[0];
				this.datamain =  res.data.data.modules[2].moduleContent.products;
				this.dataa = res.data.data.modules[3].moduleContent.banners;
				this.datab = res.data.data.modules[4].moduleContent.products;
				// console.log(this.datalist);
			}).catch(err=>{
				console.log(err);
			});
		}
	}
</script>

<style scoped lang="scss">
	.bd{
	    background: #f5f5f5;
	}
	img{
		width: 100%;
	}
	h1{
		text-align: center;
		margin: 15px 0;
		font-size: 16px;
		padding-top:35px;
	}
	h3{
		text-align: center;
		font-size: 12px;
		margin-bottom: 10px;
	    color: #808080;
	    font-weight: 400;
	}
	.info{
		margin-top: 5px;
		margin-right: 5px;
	}
	.gonglue{
		margin-top: 13px;
		background: white;
		ul{
			width:100000000000000000px;
		}
		li{
			position: relative;
		    width: 110px;
			margin-left: 20px;
			float: left;
			p{
				white-space: nowrap;  
				 text-overflow:ellipsis; 
				 overflow:hidden;
			}
		}
		#swiper{
			overflow: hidden;
			width:100%;
		}	
		.g_bottom{
			padding:15px;
			text-align: center;
			color: #4A4A4A;
		}
	}
	.tuijian{
		margin-top: 13px;
		background: white;
		overflow: hidden;
		.img{
			padding:15px;
		}
		ul{
			width:100000000000000000px;
		}
		li{
			position: relative;
		    width: 110px;
			margin-left: 20px;
			float: left;
			p{
				white-space: nowrap;  
				 text-overflow:ellipsis; 
				 overflow:hidden;
			}
		}
	}
	.remen{
		margin-top: 13px;
		background: white;
		overflow: hidden;
		.sL{
			width:10000000000px;
			li{
				width:100px;
				float: left;
				margin-left: 15px;
				margin-right: 15px;
			}
		}
	}
	.a{
		margin-top: 13px;
		background: white;
		overflow: hidden;
		ul{
			li{
				float: left;
				width: 50%;
				height: 250px;
				border-bottom: 1px solid #F5F5F5;
				img{}
				p{margin-left: 20px;
				    color: #808080;
				    font-size: 14px;}
				span{margin-left: 20px;
					font-size: 16px;}
			}
		}
	}
	.b{
		margin-bottom: 30px;
	}
	
</style>
<style>
	.mint-swipe-items-wrap {
		height: 250px;
	}
</style>
