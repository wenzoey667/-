<template>
	<main>
		<h2>{{hot.moduleContent.name}}</h2>
		<ul>
			<li v-for="data in hot.moduleContent.banners" :key="data.id"><img :src="data.bannerImgSrc" alt="" class="bigbanner"></li>
		</ul>
		
	</main>
</template>

<script>

	export default {
		name: 'hot',
		props:["hot"]
	}
</script>

<style scoped lang="scss">
	main{
		margin-top: 15px;
		background-color: white;
		// padding-top: 10px;
		padding-top: 10px;
		h2{
			
			text-align: center;
			line-height: 60px;
		}
		
		ul{
			display: flex;
			width:100%;
			height:80px;
			justify-content: space-around;
			margin-top: 10px;
			padding-bottom: 5px;
			li{
				img{
					width:57px;
					margin-bottom: 5px;
				}
			}
		}
	}
</style>
<style>
	.mint-swipe-items-wrap{
		height: 250px;
	}
</style>