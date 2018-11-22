<template>
	<div v-if="contents.data" >
		<mt-swipe :auto="0">
			<mt-swipe-item v-for="datas,index in contents.data.modules[0].moduleContent.banners" :key="datas.id">
				<img :src="datas.bannerImgSrc" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<img :src="contents.data.modules[1].moduleContent.bannerImgSrc">
		<img :src="contents.data.modules[2].moduleContent.bannerImgSrc">
		<img :src="contents.data.modules[3].moduleContent.bannerImgSrc">
		<img :src="contents.data.modules[4].moduleContent.bannerImgSrc">
		<img :src="contents.data.modules[5].moduleContent.bannerImgSrc">
		<h2>{{contents.data.modules[6].moduleName}}</h2>
		<ul class="uls">
			<li  class="lis" v-for="data in showArr" :key="data.id" >
				<img :src="data.productImg">
				<p>{{data.productName}}</p><span>￥{{data.originalPrice}}</span>
			</li>
		</ul>
		<div class="drap" @click="drap(contents.data.modules[6].moduleContent.id)">查看全部  ▶</div>
		<div class="top" @click="goTop()" v-show="isshow">
			<img src="../../../assets/images/backTop.png" alt="">
		</div>
		<p class="lastItem"></p>
	</div>
</template>

<script>
	import axios from "axios";
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	export default {
		name: 'activity',
		data(){
			return{
				contents:{},
				isshow: false,
				showArr:[]
			}
		},
		methods: {
			goTop(){
				var time = Math.floor(document.documentElement.scrollTop / 10)
				var ing = setInterval(()=>{
					document.documentElement.scrollTop -= time
					if (document.documentElement.scrollTop <= 0) {
						clearInterval(ing);
					}
				},50);
			},
			drap(id){
				this.$router.push('/index/productgroup/'+id)
			},
			details(){

			}
		},
		components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		},
		mounted(){
			window.addEventListener('scroll',()=>{
				if (document.documentElement.scrollTop > 400) {
					this.isshow = true
				} else {
					this.isshow = false
				}
			})
			if(this.$store.state.indexData.length===0){
				axios.get('/v2/page?pageId=1&tabId=10010&_=1542777383978').then(resp=>{
					this.contents = resp.data;
					this.showArr = this.contents.data.modules[6].moduleContent.products.slice(0,6);
					this.$store.state.indexData = resp.data;
				})
			}else{
				this.contents = this.$store.state.indexData;
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.top{
		width: 45px;
		height: 45px;
		position: fixed;
		right: 20px;
		bottom: 70px;
	}
	div{
		background-color: #f5f5f5;
	}
	mt-swipe{
		margin-bottom: 15px;
	}
	img{
		width: 100%;
		display: block;
		margin-bottom: 15px;
	}
	h2{
		text-align: center;
		padding: 15px 0;
		height: 27px;
		line-height: 27px;
		background-color: white;
		border-bottom: 1px solid #f5f5f5;
	}
	.uls{
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #f5f5f5;
	}
	.lis{
		width: 49.7%;
		background-color: white;
		border-bottom: 1px solid #f5f5f5;
		border-right: 1px solid #f5f5f5;
	}
	a{
		text-decoration: none;
		color: #808080;
		display: block;
	}
	p{
		box-sizing: border-box;
		padding: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 150px;
	}
	span{
		display: block;
		color: black;
		text-indent: 5px;
	}
	.drap{
		height: 48px;
		line-height: 48px;
		text-align: center;
		margin-bottom: 15px;
		background-color: white; 
	}
	.lastItem{
		height: 48px;
	}
</style>
<style>
	.mint-swipe-items-wrap {
		height: 250px;
	}
</style>
