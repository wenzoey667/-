<template>
	<mt-swipe v-if="contents.data" :auto="0">
		<mt-swipe-item v-for="datas,index in contents.data.modules[0].moduleContent.banners" :key="datas.id">
			<img :src="datas.bannerImgSrc" alt="">
		</mt-swipe-item>
	</mt-swipe>
</template>
<script>
	export default {
		name: 'swipe',
		data(){
			return {
				
			}
		},
		props: ["contents"]
	}
</script>
<style scoped>
	img{
		width: 100%;
	}
</style>
<style>
.mint-swipe-items-wrap {
	height: 250px;
}
</style>
