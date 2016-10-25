<template>
<div id="container" @scroll="scrollLoad">
	<div class="live-box" v-for="item in gamelist">
		<img :src="item.room_src">
		<span class="livetype">{{item.game_name}}</span>
		<span class="roomname">{{item.room_name}}</span>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			gamelist: [],
			offset: 0
		}
	},
	created() {
		this.init();
	},
	methods: {
		init() {
			this.$http.get(
				'/api/RoomApi/live?offset=' + this.offset
			).then(response => {
				this.gamelist = this.gamelist.concat(response.body.data);
			});
		},
		scrollLoad(event) {
			let windowHeight = window.innerHeight,
				scrollTop = event.target.scrollTop,
				scrollHeight = event.target.scrollHeight;
			if (scrollTop + windowHeight > scrollHeight - 20) {
				this.offset++;
				this.init();
			}
		}
	}
}
</script>

<style lang="less" scoped>
#container {
	width: 100%;
	display: flex;
	flex-flow:row wrap;
	justify-content:center;
	align-items:center;
	align-content:center;
    .live-box {
        float: left;
        position: relative;
        width: 160px;
        margin: 10px;
        img {
            width: 100%;
            height: 90px;
        }
        .roomname {
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            background: #fff;
        }
        .livetype {
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            background: rgba(0, 0, 0, .8);
        }
    }
    @media screen and (max-width:360px) {
        .live-box {
            width: 320px;
            margin: 10px;
            img {
                width: 100%;
                height: 180px;
            }
        }
    }
}
</style>
