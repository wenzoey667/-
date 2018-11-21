<template>
	<div>
		<div>
			这是全部
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: 'productgroup',
		data(){
			return{
				groups:null
			}
		},
		mounted(){
			axios.get(`/pages/productGroup/${this.$route.params.id}/products?pageNumber=1&_=1542797443199`).then((res)=>{
				console.log(res)
			})
		}
	}
</script>

<style scoped>

</style>
