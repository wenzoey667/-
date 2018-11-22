<template>
	<div>
		<div class="title">
			<div ><i style="float: left" class="iconfont icon-shouye"></i></div>
			<div>商品详情</div>
			<div><i style="float: right" class="iconfont icon-sousuo"></i></div>
		</div>
		<img src="" alt="">
	</div>
</template>

<script>
	import '../../assets/font_928034_och37s6bfco/iconfont.css'
	import axios from 'axios';
	export default {
		name: 'detail',
		data(){
			return {
				name: this.$store.state.detailname,
				money: this.$store.state.detailmoney,
				detail: [],
				detailImg: []
			}
		},
		mounted(){
			console.log(this.$route.params)
			// console.log(this.$store.state.detailname)
			// console.log(this.$store.state.detailmoney)
			/*axios.get('/itemdetail/skuInfos/' + this.$route.params.id + '?_=' + new Date().getTime()).then(val=>{
				console.log(val.data.data.skuAttrPairs);
				this.detail = val.data.data.skuAttrPairs

			})
			axios.get('/itemdetail/spuInfos/' + this.$route.params.parentid + '?_=' + new Date().getTime()).then(val=>{
				console.log(val.data.data.itemDetailIntroVoList);
				this.detailImg = val.data.data
			})*/
		}
	}
</script>

<style scoped lang="scss">
.title{
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
</style>
