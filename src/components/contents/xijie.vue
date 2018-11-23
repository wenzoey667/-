<template>
	<div>
		<nav>
			<i class="iconfont icon-shouye One" slot="One"></i>
			<h3 class="Two" slot="Two">消息</h3>
		</nav>
		<div class="commentList">
	        <div id="commentRoot">
	        	<div class="messageListItemTime">6小时前</div>
	    		<div class="clearfix  messageListItem">
	        		<div class="messageListItemRihgt">
	            		<div class="messageListItemRihgtTop clear">
	                		<p class="left">空间</p>
	        				<p class="youjian right" @click="handleclick()">＞</p>
	            		</div>
	                	<p class="messageContent" @click="handlecl()">20%靠宜家，70%靠网淘，12万装出138m²日系阳光的家！</p>
	        		</div>
	   			</div>
	   			<div class="messageListItemTime">2天前</div>
	    		<div class="clearfix  messageListItem">
	        		<div class="messageListItemRihgt">
	            		<div class="messageListItemRihgtTop clear">
	                		<p class="left">生活</p>
	                		<p class="youjian right" @click="handleclick()">＞</p>
	            		</div>
	                	<p class="messageContent" @click="handlecl()">深度：沙发怎么保养，看这一篇就够了</p>
	                </div>
    			</div>
    			<div class="messageListItemTime">2018-11-16 19:10</div>
    			<div class="clearfix  messageListItem">
    				<div class="messageListItemRihgt">
            			<div class="messageListItemRihgtTop clear">
                			<p class="left">好物</p>
                			<p class="youjian right" @click="handleclick()">＞</p>
            			</div>
                		<p class="messageContent" @click="handlecl()">学不会日本变态的收纳技能，就用这三样跟杂乱说byebye！</p>
               		</div>
    			</div>
	    	</div>
	    	<div  class="messageListItemTime last">
	    		暂无更多消息
	    	</div>
		</div>
	</div>
</template>

<script>
	import nav from "../infos/nav"
	export default{
		name:'xijie',
		methods:{
			handleclick(){
				this.$router.push('/contents')
			},
			handlecl(){
				this.$router.push('/contents')
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	nav{
		position: relative;
		height: 44px;
		line-height: 44px;
		border-bottom: 1px solid #f5f5f5;
	}
	.One{
		position: fixed;
		top: 0;
		left: 10px;
	}
	.Two{
		text-align: center;
		font-size: 18px;
	}
	.commentList{
		background-color: #f1f1f1;
		padding: 0 20px;
		height: 100%;
	}
	.messageListItemTime{
		text-align: center;
		margin: 10px 0;
	}
	.messageListItem{
		background-color: white;
		padding: 10px;
	}
	.messageListItemRihgtTop{
		line-height: 20px;
	}
	.messageContent{
		line-height: 24px;
		margin-top: 20px;
		font-size: 12px;
	}
	.last{
		height: 200px;
	}
</style>