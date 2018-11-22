<template>
	<main>
		<h2>{{design.moduleContent.name}}</h2>
		<h3>{{design.moduleDescription}}</h3>
		<div class="list">
			<ul>
				<li v-for="data in design.moduleContent.products">
					<img :src="data.productImg" alt="">
					<p>{{data.productName}}</p>
					<p>￥{{data.originalPrice}}</p>
				</li>
			</ul>
		</div>
		
		<div class="all">查看全部<img src="/static/home_design/arrow.png" alt=""></div>
	</main>
</template>
<script>
	export default{
		name:'new',
		props:["design"]
	}
</script>
<style scoped lang="scss">
	main{
		background-color: white;
		margin-top: 15px;
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
		.list{
			overflow: hidden;
			ul{
				display: flex;
				width:2400px;
				height:142px;
				justify-content: space-around;
				margin-top: 10px;
				li{
					width:100px;
					img{
						width:90px;
						height:90px;
						margin-bottom: 15px;
					}
					p:first-of-type{
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						line-height:20px;
						color:gray;
					}
				}
			}
		}
		.all{
			display: flex;
			justify-content: center;
			align-items: center;
			line-height:50px;
			img{
				margin-left: 5px;
				width: 9px;
				height: 9px;
			}
		}
	}
</style>