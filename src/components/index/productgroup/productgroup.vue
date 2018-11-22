<template>
	<div v-if="groups">
			<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check= "false"
  infinite-scroll-distance="48">
				<li v-for="data in groups" :key="data.productId">
					<img :src="data.productImg" alt="">
					<p>{{data.productTitle}}</p>
					<span>￥{{data.originalPrice}}</span>
					<p>{{data.prizeOrSlogan}}</p>
				</li>
			</ul>
			<h3>{{msg}}</h3>
			<p class="lastItem"></p>
	</div>
</template>

<script>
	import Vue from "vue";
	import axios from "axios";
	import MintUI from 'mint-ui'
	import 'mint-ui/lib/style.css'
	Vue.use(MintUI);
	export default {
		name: 'productgroup',
		data(){
			return{
				groups:null,
				loading:false,
				current:4,
				total:0,
				msg:"正在加载中....."
			}
		},
		mounted(){
			axios.get('/pages/productGroup/' + this.$route.params.id + '/products?pageNumber=1&_=1542797443199').then((res)=>{
				this.groups = res.data.data.products;
				console.log(this.groups);
				this.total = this.groups.length;
			})
		},
		methods:{
			loadMore(){
				this.current += 6;
				if(this.current>this.total){
					this.loading = true;
					this.msg= "没有更多了";
					/*console.log('------------')*/
			    	return ;
				}
				axios.get('/pages/productGroup/' + this.$route.params.id + '/products?pageNumber=1&_=1542797443199').then((res)=>{
					this.groups = res.data.data.products;
					/*console.log(res.data.data);*/
				})
			}
		}
	}
</script>

<style scoped>
	img{
		width: 100%;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
	}
	li{
		width: 49.7%;
		border-bottom: 1px solid #f5f5f5;
		border-right: 1px solid #f5f5f5;
	}
	p{
		box-sizing: border-box;
		padding: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 150px;
		color: #808080;
	}
	span{
		display: block;
		color: black;
		text-indent: 5px;
	}
	h3{
		height: 50px;
		text-align: center;
		line-height: 50px;
	}
	.lastItem{
		height: 48px;
	}
</style>
