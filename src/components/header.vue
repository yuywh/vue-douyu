<template>
	<div id="header">
		<div class="logo">
			<img src="../assets/logo.png" alt="douyu">
		</div>
		<ul>
			<li class="active">首页</li>
			<li>分类</li>
		</ul>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less">
#header{
	width: 100%;
	height: 50px;
	background: #fff;
	.logo{
		float: left;
		width: auto;
		height: 50px;
		margin-left: 10px;
		line-height: 50px;
		img{
			vertical-align: middle;
		}
	}
	ul{
		width: 200px;
		margin: 0 auto;
		overflow: hidden;
		li{
			float: left;
			list-style: none;
			width: 80px;
			height: 48px;
			margin: 0 10px;
			line-height: 48px;
			text-align: center;
		}
		li.active{
			color: #FF6501;
			border-bottom: 2px solid #FF6501;
		}
	}

}

</style>