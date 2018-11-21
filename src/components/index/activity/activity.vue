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
		<div class="uls">
			<div class="lis">
				<a href="javascript:;">
					<img :src="contents.data.modules[6].moduleContent.products[0].productImg">
					<p>{{contents.data.modules[6].moduleContent.products[0].productName}}</p><span>￥{{contents.data.modules[6].moduleContent.products[0].originalPrice}}</span>
				</a>
			</div>
			<div class="lis">
				<a href="javascript:;">
					<img :src="contents.data.modules[6].moduleContent.products[1].productImg">
					<p>{{contents.data.modules[6].moduleContent.products[1].productName}}</p><span>￥{{contents.data.modules[6].moduleContent.products[1].originalPrice}}</span>
				</a>
			</div>
			<div class="lis">
				<a href="javascript:;">
					<img :src="contents.data.modules[6].moduleContent.products[2].productImg">
					<p>{{contents.data.modules[6].moduleContent.products[2].productName}}</p><span>￥{{contents.data.modules[6].moduleContent.products[2].originalPrice}}</span>
				</a>
			</div>
			<div class="lis">
				<a href="javascript:;">
					<img :src="contents.data.modules[6].moduleContent.products[3].productImg">
					<p>{{contents.data.modules[6].moduleContent.products[3].productName}}</p><span>￥{{contents.data.modules[6].moduleContent.products[3].originalPrice}}</span>
				</a>
			</div>
			<div class="lis">
				<a href="javascript:;">
					<img :src="contents.data.modules[6].moduleContent.products[4].productImg">
					<p>{{contents.data.modules[6].moduleContent.products[4].productName}}</p><span>￥{{contents.data.modules[6].moduleContent.products[4].originalPrice}}</span>
				</a>
			</div>
			<div class="lis">
				<a href="javascript:;">
					<img :src="contents.data.modules[6].moduleContent.products[5].productImg">
					<p>{{contents.data.modules[6].moduleContent.products[5].productName}}</p><span>￥{{contents.data.modules[6].moduleContent.products[5].originalPrice}}</span>
				</a>
			</div>
		</div>
		<a class="drap">查看全部</a>
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
				contents:{}
			}
		},
		components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		},
		mounted(){
			if(this.$store.state.indexData.length==0){
				axios.get('/v2/page?pageId=1&tabId=10010&_=1542777383978').then(resp=>{
					console.log(resp.data);
					this.contents = resp.data;
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
