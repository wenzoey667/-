<template>
	<div>
		<div class="val">
			<span class="empty">暂无订单</span>
		</div>
		<!-- <div class="bottom"></div> -->
	</div>
</template>

<script>
	import 'mint-ui/lib/style.css';
	import axios from "axios";
	export default {
		name: 'all'
	}
</script>

<style scoped lang="scss">
.val{
	width: 100%;
	min-height: 100%;
	text-align: center;
	.empty{
		display: inline-block;
		font-size: 18px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
}
</style>
