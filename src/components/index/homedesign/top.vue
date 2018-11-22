<template>
	<div>
		<div class="top" @click="goTop()" v-show="isshow">
			<img src="../../../assets/images/backTop.png" alt="">
		</div>
	</div>
</template>
<script>
	export default {
		name: 'top',
		data(){
			return {
				isshow: false
			}
		},
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
			}
		},
		/******************************************/
		mounted(){
			/***************顶部函数*******************/
			window.addEventListener('scroll',()=>{
				// console.log(document.documentElement.scrollTop);
				if (document.documentElement.scrollTop > 400) {
					// console.log('y');
					this.isshow = true
				} else {
					// console.log('n');
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

</style>
