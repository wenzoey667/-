<template>

	<div class="main" v-if="swipelist">
		<mt-swipe :auto="2500">
		  <mt-swipe-item v-for="data in swipelist.modules[0].moduleContent.banners" :key="data.id"><img :src="data.bannerImgSrc" alt=""></mt-swipe-item>
		</mt-swipe>
		<newdesign :design="swipelist.modules[1]"></newdesign>
		<brand :brand="swipelist.modules[2]"></brand>
		<hot :hot="swipelist.modules[3]"></hot>
		<tableware :tableware="swipelist.modules[4]"></tableware>
		<tableware :tableware="swipelist.modules[5]"></tableware>
		<top></top>
	</div>
</template>

<script>


	import Vue from 'vue';
	import 'mint-ui/lib/style.css';
	import { Swipe, SwipeItem } from 'mint-ui';
	import axios from 'axios';

	import newdesign from './new';
	import brand from './brand';
	import hot from './hot';
	import tableware from './tableware';
	import top from './top';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		name: 'homedesign',
		components:{
			newdesign,
			brand,
			hot,
			tableware,
			top
		},
		data(){
			return{
				swipelist:null
			}
		},
		mounted(){
			axios.get('/v2/page?pageId=1&tabId=10006&_=1542764204325').then(res=>{
				this.swipelist = res.data.data;
				// console.log(this.swipelist)
			})
		}
	}

</script>

<style scoped>

	.main{
		background-color: #f5f5f5;
		padding-bottom: 50px;
	}
	img{
		width: 100%;
	}
</style>
<style>
	.mint-swipe-items-wrap{
		height: 250px;
	}
</style>
