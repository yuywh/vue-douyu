<template>
    <div id="home">
        <topnav></topnav>
        <router-view></router-view>
    </div>
</template>

<script>
import topnav from './components/modules/header.vue'

export default {
    components:{
        topnav
    }
}
</script>

<style lang="less">
*{
    padding: 0;
    margin: 0;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
}
body{
    background: #f2f2f2;
}
#home{
    width: 100%;
}
</style>
