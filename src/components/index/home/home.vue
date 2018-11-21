<template>
	<div>
		<swipe :contents="contents"></swipe>
		<shop :contents="contents"></shop>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	import swipe from './swipe.vue';
	import shop from './shop.vue';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		name: 'index',
		data(){
			return {
				contents: {}
			}
		},
		components:{
			swipe,
			shop
		},
		mounted(){
			if (this.$store.state.indexData.length === 0) {
				axios.get('/v2/page?pageId=1&tabId=1&_=1542713585501').then(err=>{
					console.log(err.data);
					this.contents = err.data
					this.$store.state.indexData = err.data
				})
			} else {
				this.contents = this.$store.state.indexData
			}
		}
	}
</script>

<style scoped>
img{
	width: 100%;
}
</style>
