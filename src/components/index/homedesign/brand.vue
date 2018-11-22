<template>
	<main>
		<h2>{{brand.moduleContent.name}}</h2>
		<h3>{{brand.moduleDescription}}</h3>
		<img :src="brand.moduleContent.banners[0].bannerImgSrc" alt="" class="bigbanner">
		<ul>
			<router-link to="/home/homedesign" tag="li" v-for="data in brand.moduleContent.products" :key="data.id">
				<img :src="data.productImg" alt="">
				<p>{{data.productName}}</p>
				<p>￥{{data.originalPrice}}</p>
			</router-link>
		</ul>
	</main>
</template>

<script>

	export default {
		name: 'brand',
		props:["brand"]
	}
</script>

<style scoped lang="scss">
	main{
		margin-top: 15px;
		background-color: white;
		// padding-top: 10px;
		h2{
			text-align: center;
			line-height: 60px;
		}
		h3{
			text-align: center;
			color:gray;
			font-size: 10px;
			font-weight: normal;
		}
		.bigbanner{
			margin-top: 30px;
		}
		ul{
			display: flex;
			width:100%;
			height:142px;
			justify-content: space-around;
			margin-top: 10px;
			padding-bottom: 10px;
			li{
				width:100px;
				img{
					width:100px;
					height:100px;
					margin-bottom: 5px;
				}
				p{
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					line-height:20px;
					text-align: center;
				}
			}
		}
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