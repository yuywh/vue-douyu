<template lang="html">
        <div id="classify">
            <div class="live-box" v-for="item in gamelist">
                <a v-link="{path:'/livetype',query:{id:item.cate_id},append:true}">
                    <img :src="item.game_src">
                </a>
                <span class="name">{{item.game_name}}</span>
            </div>
        </div>
</template>

<script>
    export default{
        data(){
            return {
                gamelist:''
            }
        },
        created(){
            this.init();
        },
        methods:{
            init(){
                this.$http.get('/api/RoomApi/game').then(response =>{
                    this.gamelist = response.body.data;
                })
            }
        }
    }
</script>

<style lang="less">
#classify{
    display: flex;
	flex-flow:row wrap;
	justify-content:center;
	align-items:center;
	align-content:center;
    .live-box{
		position: relative;
		width: 70px;
		margin: 10px;
        a{
            display: block;
        }
		img{
			width: 100%;
			height: 70px;
            border-radius:50%;
		}
		.name{
			display: block;
			width: 100%;
			height: 30px;
			line-height: 30px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
            text-align: center;
			background: #fff;
		}
    }
}
</style>
