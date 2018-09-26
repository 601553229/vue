<template>
    <div class="home">
        <div class="homeTitle">{{ msg }}</div>
        <ul>
            <li>我的订单111</li>
            <li>我的钱包222</li>
            <li>我的地址333</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                msg: '个人中心'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .homeTitle {
        line-height: 0.88rem;
    }

    .home {
        padding: 0 0.5rem;
    }

    .home ul li {
        font-size: 0.28rem;
        color: #666;
        text-align: left;
        line-height: 0.8rem;
    }
</style>
