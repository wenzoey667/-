<template>
	<div>
		asdasdsadasdsadas
	</div>
</template>

<script>
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
			axios.get('/itemdetail/skuInfos/' + this.$route.params.id + '?_=' + new Date().getTime()).then(val=>{
				console.log(val.data);
				this.detail = val.data

			})
			axios.get('/itemdetail/spuInfos/' + this.$route.params.parentid + '?_=' + new Date().getTime()).then(val=>{
				console.log(val.data);
				this.detailImg = val.data
			})
		}
	}
</script>

<style scoped>

</style>
