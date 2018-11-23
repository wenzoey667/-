<template>
	<div>
		<div class="world" v-if="contents.data">
			<div v-for="data,index in contents.data.modules">


				<div v-if="data.moduleType == 102" class="box102 box" :key="data.moduleContent.id">
					<div class="text">
						<h3>{{data.moduleName}}</h3>
						<p>{{data.moduleDescription}}</p>
					</div>
					<div class="img">
						<img :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
					</div>
				</div>


				<div v-else-if="data.moduleType == 107" class="box107 box" :key="data.moduleContent.id">
					<div class="text">
						<h3>{{data.moduleName}}</h3>
						<p>{{data.moduleDescription}}</p>
					</div>
					<div class="img">
						<div class="banner">
							<img :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
						</div>
						<div class="imgs">
							<div v-for="val,i in data.moduleContent.products" class="smallimg"  @click="setdetail(val)">
								<img :src="val.productImg" alt="">
								<h5>{{val.productTitle}}</h5>
								<p>¥ {{val.originalPrice}}</p>
							</div>
						</div>
					</div>
				</div>


				<div v-else-if="data.moduleType == 401" class="box401" :key="data.moduleContent.id">
					<div class="text">
						<h3>{{data.moduleName}}</h3>
						<p>{{data.moduleDescription}}</p>
					</div>
					<div class="mdzz">
						<div class="long">
							<div class="l_box" v-for="val,i in data.moduleContent.products" @click="setdetail(val)">
								<img :src="val.productImg" alt="">
								<p>{{val.productName}}</p>
								<span>¥ {{val.sellPrice}}</span>
							</div>
						</div>
					</div>
					<div class="all">
						<span>查看全部 ▶</span>
					</div>
				</div>
			</div>
		</div>
		<div class="top" @click="goTop()" v-show="isshow">
			<img src="../../../assets/images/backTop.png" alt="">
		</div>
	</div>
</template>
<script>
	export default {
		name: 'shop',
		data(){
			return {
				isshow: false
			}
		},
		props: ["contents"],
		methods: {
			/***************顶部函数*******************/
			goTop(){
				var time = Math.floor(document.documentElement.scrollTop / 10)
				var ing = setInterval(()=>{
					document.documentElement.scrollTop -= time
					if (document.documentElement.scrollTop <= 0) {
						clearInterval(ing);
					}
				},50);
			},
			setdetail(val){
				this.$store.state.detail = val;
				this.$router.push('/detail/' + val.productId)
			}
		},
		/******************************************/
		mounted(){
			/***************顶部函数*******************/
			window.addEventListener('scroll',()=>{
				if (document.documentElement.scrollTop > 400) {
					this.isshow = true
				} else {
					this.isshow = false
				}
			})

			/******************************************/
		},
		computed:{
			
		}
	}
</script>
<style scoped lang="scss">
.top{
	width: 45px;
	height: 45px;
	position: fixed;
	right: 20px;
	bottom: 70px;
}
img{
	max-width: 100%
}
.world{
	background-color: #f6f6f6;
}
.box{
	background-color: #fff;
	padding: 15px;
	margin-bottom: 15px;
}
.text{
	height: 83px;
	text-align: center;
	padding-bottom: 10px;
	h3{
		font-size: 18px;
		padding-top: 15px;
		padding-bottom: 15px;

	}
	p{
		color: #666;
	}
}

.box107{
	.imgs{
		display: flex;
		flex-direction: row;
		background-color: #fff;
		.smallimg {
			flex: 1;
			text-align: center;
			h5{
				font-size: 12px;
				font-weight: 500;
				height: 17px;
				margin-top: 5px;
				overflow:hidden;
				text-overflow:ellpsis;
			}
			p{

			}
		}
	}
}

.box401{
	background-color: #fff;
	margin-bottom: 15px;
	.mdzz{
		margin-left: auto;
		margin-right: auto;
		position: relative;
		overflow: hidden;
		.long{
			height: 155px;
			width: 13000px;
			.l_box{
				float: left;
				padding-left: 10px;
				padding-right: 10px;
				width: 100px;
				height: 155px;
				p{
					height: 20px;
					line-height: 20px;
					overflow: hidden;
				}
			}
		}
	}
	.all{
		text-align: center;
		padding: 17px;
		color: #666;
		font-size: 12px;
	}
}

</style>
