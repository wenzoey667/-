<template>
	<div id="box">
		<ul>
			<li v-for="data in list" :key="data.id">
				<div class="head">
					<input type="checkbox" name="" :value="data" v-model="checkgroup" @change="handleChange">
					<div class="buttonList">
						<div @click="data.count>1 ? data.count-- : data.count=1">-</div><span>{{data.count}}</span><div @click="data.count++">+</div>
					</div>
				</div>
				<div class="pro">
					<img :src="data.imgUrl" alt="">
					<div class="pro_cont">
						<div class="pro_title">{{data.name}}</div>
						<div class="pro_label">{{data.label}}</div>
						<div class="pro_price">
							<p class="price">￥{{data.price}}</p>
							<p class="count">x{{data.count}}</p>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<footer>
			<label>
				<input type="checkbox" v-model="isAll" @change="all">  全选
			</label>
			<h2>合计：￥ {{sum}}</h2>
			<h3>去结算</h3>
		</footer>
	</div>
</template>
<script>
	export default{
		name:'list',
		data(){
			return{
				checkgroup:[],
				isAll:true,
				list:[]
			}
		},
		props:["lists"],
		methods:{
			handleChange(){
				if(this.checkgroup.length === this.list.length){
					this.isAll = true
					// console.log('全选')
				}else{
					this.isAll = false
				}
			},
			all(){
				if(this.isAll === true){
					this.checkgroup = this.list;
				}else{
					this.checkgroup = []
				}
			}
		},
		mounted(){
			if(this.$store.state.cartlist.length>0){
				this.list = this.$store.state.cartlist;
			
			}else{
				
				this.list = this.lists;
			}
			if(this.isAll === true){
				this.checkgroup = this.list;
			}
			
			
		},
		destroyed(){
			// console.log('destroy');
			var count = 0;
			console.log("cart销毁时的checkgroup",this.checkgroup);
			this.checkgroup.forEach(val=>{
				count += val.count;
			})
			// console.log(count);
			this.$store.state.count = count;
			this.$store.state.cartlist = this.list;
			console.log("销毁时存在store中count",this.$store.state.count);
			console.log("销毁时存在store中cartlist",this.$store.state.cartlist);
		},
		computed:{
			sum(){
				var sum = 0;
				this.checkgroup.forEach(val=>{
					sum += val.price*val.count;
				})
				return sum;
			}
		}
	}
</script>
<style scoped lang="scss">
	#box{
		background-color: white;
		margin: 3px 0 15px 0;
		ul{
			li{
				margin-left: 15px;
				border-bottom:1px solid #f5f5f5;
				.head{
					display: flex;
					justify-content: space-between;
					height: 49px;
					align-items: center;
					border-bottom: 1px solid #f5f5f5;
					.buttonList{
						display: flex;
						margin-right: 20px;
						div{
							line-height: 25px;
							text-align: center;
							width: 25px;
							background-color: #f5f5f5;
						}
						span{
							display: block;
							width: 35px;
							line-height: 25px;
							text-align: center;
						}
					}
				}

				.pro{
					display: flex;
					padding:15px;
					box-sizing: border-box;
					.pro_cont{
						.pro_title{
							font-size: 14px;
							line-height: 18px;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							width: 245px;
						}
						.pro_label{
							width: 34px;
							line-height:20px;
							text-align: center;
							color:gray;
							background-color: #f5f5f5;
							margin-top: 8px;
						}

						.pro_price{
							margin-top: 30px;
							display: flex;
							justify-content: space-between;
							.count{
								color:gray;
								margin-right: 10px;
								margin-bottom: 5px;
							}
						}
						
					}
				}
			}
		}

		footer{
			background-color: white;
			height:50px;
			width: 100%;
			display: flex;
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 3;
			align-items: center;
			label{
				display: block;
				margin-left: 15px;
				input{
					border-radius: 50%;
				}
			}
			h2{
				flex:auto;
				text-align: right;
				padding-right: 10px;
				box-sizing: border-box;
			}
			h3{
				width: 100px;
				line-height: 50px;
				background-color: #FFD444;
				text-align: center;
			}
		}
	}
	img{
		width: 80px;
		height: 80px;
	}
</style>