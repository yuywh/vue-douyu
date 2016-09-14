<template>
	<div id="container">
		<div class="live-box" v-for="item in gamelist">
			<img :src="item.room_src">
			<span class="livetype">{{item.game_name}}</span>
			<span class="roomname">{{item.room_name}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
		    return {
		        gamelist: ''
		    }
		},
		created(){
		    this.init();
		},
		methods:{
		    init(){
		        this.$http({
		            method:'GET',
		            url:'/api/RoomApi/live'
		        }).then(response => {
		            this.gamelist = response.body.data;
		        })
		    }
		}
	}
</script>

<style lang="less">
#container{
	display: flex;
	flex-flow:row wrap;
	justify-content:center;
	align-items:center;
	align-content:center;
	.live-box{
		position: relative;
		width: 160px;
		margin: 10px;
		img{
			width: 100%;
			height: 90px;
		}
		.roomname{
			display: block;
			width: 100%;
			height: 30px;
			line-height: 30px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			background: #fff;
		}
		.livetype{
			position: absolute;
			top: 0;
			right: 0;
			display: block;
			height: 20px;
			line-height: 20px;
			text-align: center;
			font-size:14px;
			color: #fff;
			background: rgba(0, 0, 0, .8);
		}
	}
	@media screen and (max-width:360px){
		.live-box{
			width: 320px;
			margin: 10px;
			img{
				width: 100%;
				height: 180px;
			}
		}
	}
}
</style>