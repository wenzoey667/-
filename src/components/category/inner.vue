<template>
	<div>
		<header>
			<i class="iconfont icon-shouye b" @click="home()"></i>
			<h2>{{$store.state.categoryTitle}}</h2>
			<i class="icon-fenlei iconfont a"></i>
		</header>
		<div class="menu">
			<ul>
				<router-link tag="li" activeClass="active" to="/inner/20/"><img src="https://img.wowdsgn.com/category/small_icon/10_%E5%AE%A2%E5%8E%85%E4%B8%8E%E5%8D%A7%E5%AE%A4.png?imagesrouter-linkm"><p>All</p></router-link>
				<router-link tag="li" activeClass="active" to="/inner/20/sf"><p class="m">沙发</p></router-link>
				<router-link tag="li" activeClass="active" to="/inner/20/dy"><p class="m">椅凳</p></router-link>
				<router-link tag="li" activeClass="active" to="/inner/20/gj"><p class="m">柜架</p></router-link>
			</ul>
		</div>
		<div class="nav">
			<ul>
				<router-link activeClass="activeN" tag="li" to="/inner/20/"><p>上新</p></router-link>
				<router-link activeClass="activeN" tag="li" to="/inner/20/xl"><p>销量</p></router-link>
				<router-link activeClass="activeN" tag="li" to="/inner/20/jg"><p>价格</p></router-link>
			</ul>
		</div>
		<div class="proInfo">
			<ul>
				<li v-for="data in datalist"><img :src="data.productImg"><p>{{data.productTitle}}</p><span>￥{{data.sellPrice}}</span></li>
			</ul>
		</div>
	</div>
</template>
<script>
	//https://m.wowdsgn.com/pages/category/35?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1542901533890
	import axios from "axios"
	export default{
		name:"inner",
		data(){
			return{
				datalist:[],
				dataname:[],
				dataprice:[]
			}
		},
		methods:{
			home(){
				this.$router.push('/index/home');
			}
		},
		mounted(){
			axios.get("/pages/category/20?pageNumber=1&orderBy=onShelfTime&sort=desc&_="+new Date().getTime()).then(res=>{
				 this.datalist = res.data.data.products;
				console.log(res);
			})
		}
	}
</script>
<style scoped lang="scss">
	header{
		z-index:1000;
	    background: #fff;
	    height: 45px;
	    line-height: 45px;
	    -webkit-box-sizing: border-box;
	    position: relative;
	    border-bottom: 1px solid #f5f5f5;
	    h2{
			float: left;
			// padding-right: 150px;
		    text-indent: 140px;
		}
		.a{
			float: right;
			margin-right: 10px;
		}
		.b{
			float: left;
			margin-left: 10px;
		}
	}
	.menu{
		z-index:1000;
		background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim) no-repeat left center;
	    position: relative;
	    height: 90px;
	    padding: 10px 0;
	    ul{
	    	position: relative;
		    width: 100%;
		    height: 100%;
		    z-index: 1;
		    display: flex;
	        list-style: none;
	        li{
    	        border: 1px solid rgba(255, 255, 255, 0.2);
        	    width:80px;
        	    height: 80px;
        	    box-sizing: border-box;
        	    padding:10px 20px 0 20px;
        	    margin-left: 15px;
        	    margin-top: 5px;
        	    a{
        	    	text-decoration: none;
        	    }
        	    img{
        	    	width:40px;
        	    	height: 40px;
        	    }
        	    p{
        	    	text-align: center;
        	    	color: #fff;
    	    	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    	    	    font-weight: bold;
    	    	    font-size: 13px;
    	    	    line-height: 20px;
        	    }
        	    .m{
        	    	width:40px;
        	    	line-height: 55px;
        	    }
	        }
	    }
	    .active{
        	background: rgba(255, 255, 255, 0.2);
	    	border: 1px solid rgba(255, 255, 255, 1);
	    }
	}
	.nav{
		z-index:100000;
		ul{
			list-style: none;
			width:100%;
			height: 40px;
			li{
			    float: left;
			    color: #808080;
			    margin: 0 35px;
			    position: relative;
			    font-size: 14px;
			    text-align: center;
			    line-height: 40px;
			    p{
			    	padding:0 10px;
			    }
			}
			.activeN{
			    display: block;
			    color: #000;
			    position: relative;
			    border-bottom: 2px solid black;
			    box-sizing:border-box;
			}
		}
	}
	.proInfo{
		position: relative;
		ul{
			position:relative;
			li{
				width:48%;
				padding-left: 5px;
				box-sizing:border-box;
			    width: 100%;
			    padding-bottom: 5px;
				float:left;
				img{
					width:50%;
				}
				p{
					color: #808080;
				    font-size: 12px;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    width: 48%;
				}
				span{
					display: block;
					width:50%;
					height:10px;
				}
			}
		}

		
		
	}
</style>