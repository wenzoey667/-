<template>
	<main>
		<h2>{{tableware.moduleContent.name}}</h2>
		<h3>{{tableware.moduleDescription}}</h3>
		
		<ul>
			<router-link to="/home/homedesign" tag="li" v-for="data in newList" :key="data.id">
				<img :src="data.productImg" alt="">
				<p>{{data.productName}}</p>
				<p>￥{{data.originalPrice}}</p>
			</router-link>
		</ul>
		<footer>
			<a href="/home/homedesign"><div>查看全部</div><img src="/static/home_design/arrow.png" alt=""></a>
		</footer>
	</main>
</template>

<script>

	export default {
		name: 'tableware',
		props:["tableware"],
		data(){
			return{
				newList:[]
			}
		},
		mounted(){
			this.newList = this.tableware.moduleContent.products.slice(0,6);
		}
	}
</script>

<style scoped lang="scss">
	main{
		margin-top: 15px;
		background-color: white;
		padding-top: 10px;
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
			justify-content: space-around;
			margin-top: 10px;
			flex-wrap: wrap;
			border-top: 1px solid #f5f5f5;
			border-bottom: 1px solid #f5f5f5;
			li{
				box-sizing: border-box;
				width:50%;
				border-bottom: 1px solid #f5f5f5;
				img{
					width:186px;
					height:186px;
					margin-bottom: 5px;
				}
				p{
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					line-height:20px;
					margin-left: 20px;
					margin-right: 10px;
					font-size: 15px;
				}
				p:first-of-type{
					color:gray;
				}
				p:last-of-type{
					margin-bottom: 50px;
				}
			}
			li:nth-of-type(n){
				border-right: 1px solid #f5f5f5;
			}
		}
		footer{
			line-height: 50px;
			
			a{
				display: block;
				display: flex;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				color:black;
				img{
					height: 9px;
					width:9px;
					margin-left:5px;
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