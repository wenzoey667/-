<template>
	<main>
		<heads></heads>
		<shopping></shopping>
	</main>
</template>
<script>
	import heads from './header';
	import shopping from './shopping';

	export default{
		name:'cart',
		components:{
			heads,
			shopping
		}
	}
</script>
<style scoped lang="scss">
	main{
		background-color: #f5f5f5;
		padding-bottom: 50px;
	}
</style>