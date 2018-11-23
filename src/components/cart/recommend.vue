<template>
	<div class="box">
		<h3>- 为您推荐 -</h3>
		<ul  v-infinite-scroll="loadMore"
		infinite-scroll-disabled="loading"
		infinite-scroll-immediate-check= "false"
		infinite-scroll-distance="0" class="clear">
		    <li v-for="data in datalist" :key="data.id">
		      <img :src="data.productImg"/>

		      <h3>{{data.productTitle}}</h3>
		      <h4>￥{{data.sellPrice}}</h4>
		      <p>{{data.prizeOrSlogan}}</p>
		    </li>
		</ul>
		<h5>{{msg}}</h5>
	</div>
</template>
<script>
	import Vue from 'vue';
	import MintUI from 'mint-ui';
	import axios from 'axios';
	import 'mint-ui/lib/style.css';
	
	Vue.use(MintUI);

	export default{
		name:'recommend',
		data(){
			return{
				datalist:[],
      			loading:false,
      			page:1,
      			msg:'加载中……'
			}
		},
		mounted(){
			 axios.get(`/recommend/cart?currentPage=${this.page}&_=${new Date().getTime()}`).then(res=>{

			   this.datalist = res.data.data;
			   console.log(this.datalist);
			 })
		},
		methods:{
			loadMore(){
			  // console.log("到底了")

			  this.page++;

			  if(this.page>10){
			    this.loading = true //禁用
			    this.msg= "到底了";
			    return ;
			  }

			  axios.get(`/recommend/cart?currentPage=${this.page}&_=${new Date().getTime()}`).then(res=>{
			    // console.log(res.data);

			    this.datalist = [...this.datalist,...res.data.data] //合并数组
			  })
			}
		}
	}
</script>
<style scoped lang="scss">
	.box{
		width: 100%;
		background-color: white;
		h3{
			text-align: center;
			font-size: 15px;
			line-height: 60px;
		}
		ul{
			border-top: 1px solid #f5f5f5;
			li{
				color:gray;
				float: left;
				width: 50%;
				box-sizing: border-box;
				padding-left: 15px;
				padding-right: 15px;
				padding-bottom: 10px;
				height: 216px;
				border-bottom: 1px solid #f5f5f5;
				img{
					width: 100%;
				}
				h3{
					line-height:12px;
					font-size: 12px;
					font-weight: normal;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					text-align: left;
				}
				h4{
					color:black;
					margin:3px 0 2px 0;
				}
				p{
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
			}
			li:nth-of-type(n){
				border-right: 1px solid #f5f5f5;
			}
		}
		h5{
			line-height: 50px;
			text-align: center;
			font-size: 15px;
		}
	}
</style>