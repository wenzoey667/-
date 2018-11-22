<template>
	<div>
		<div v-if="datalist.length === 0" class="empty">
			<h4>您的购物车还是空的</h4>
			<div class="buttonList">
				<a href="#">看看收藏</a>
				<a href="#">去逛逛</a>
			</div>
		</div>
		<div v-else class="full">
			<list :lists="datalist"></list>
			
		</div>
		<recommend></recommend>
	</div>
</template>
<script>
	import Vue from 'vue';
	import recommend from './recommend';
	import list from './list';

	export default{
		name:'shopping',
		data(){
			return{
				datalist:[]
			}
		},
		components:{
			recommend,
			list
		},
		mounted(){
			 this.$http.get('/static/cart/cart.json').then(res=>{
			 	// console.log('json')
			 	this.datalist = res.body;
			 }) 
		}
	}
</script>
<style scoped lang="scss">
	.empty{
		h4{
			line-height: 40px;
			font-weight: normal;
			text-align: center;
			font-size: 14px;
		}
		.buttonList{
			display: flex;
			justify-content: center;
			padding-bottom: 10px;
			a{
				text-decoration: none;
				color:black;
				width: 100px;
				line-height:40px;
				background-color: #FFD444;
				text-align: center;
				font-size: 14px;
			}
			a:last-of-type{
				margin-left: 20px;
			}
		}
	}

	.full{
		width: 100%;
		
	}
</style>