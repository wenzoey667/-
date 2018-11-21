<template>
	<div>
		<mt-swipe v-if="contents.data" :auto="0">
			<mt-swipe-item v-for="datas,index in contents.data.modules[0].moduleContent.banners" :key="datas.id">
				<img :src="datas.bannerImgSrc" alt="">
			</mt-swipe-item>
		</mt-swipe>
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
				axios.get('')
			}
		}
	}
</script>

<style scoped>

</style>
