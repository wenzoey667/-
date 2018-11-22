<template>
	<div>
		<header>
			<img src="../../assets/images/titleLogo.png">
			<input type="text" class="seek">
		</header>
		<div class="info">
			<img src="https://m.wowdsgn.com/static/img/furniture.png">
		</div>
		<ul>
			<li><span>沙发</span><i></i></li>
		</ul>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped lang="scss">
header{
	margin-left: 10px;
	img:nth-of-type(1){
		vertical-align: middle;
		width: 65px;
		margin-top: 3px;
		display: inline-block;
	}
	.seek{
		border: 0;
		outline: none;
		display: inline-block;
		width: 260px;
		height: 28px;
		line-height: 28px;
		vertical-align: middle;
		background-color: #F5F5F5;
		border-radius: 10px;
		margin-left: 8px;
		margin-bottom: 2px;
		padding-left: 10px;
		margin-top: 10px;
	}
}
.info{
	padding:0 15px 50px 15px;
    position: relative;
    background: #fff;	
    margin: 0 auto;
    img{
    	margin-top: 14px;
    	display: block;
    	width:345px;
    	height: 115px;
    }
}
</style>