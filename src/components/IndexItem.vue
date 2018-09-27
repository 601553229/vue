<template>
    <div class="index">
        <img src="../assets/images/item_top2.jpg" class="tipImg" alt="">
        <div class="items">
            <a href="#">
                <div class="item">
                    <img src="../assets/images/kongtiao.jpg" alt="">
                    <p>空调</p>
                </div>
            </a>
            <a href="#">
                <div class="item">
                    <img src="../assets/images/bingxiang.jpg" alt="">
                    <p>冰箱</p>
                </div>
            </a>
            <a href="#">
                <div class="item">
                    <img src="../assets/images/dianshi.jpg" alt="">
                    <p>电视</p>
                </div>
            </a>
            <a href="#">
                <div class="item">
                    <img src="../assets/images/xiyiji.jpg" alt="">
                    <p>洗衣机</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexItem',
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {
            changeStatus: function () {
                this.btnColor = 1;
            },
            changeStatus2: function () {
                this.btnColor = 2;
            }
        },
        mounted(){

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    .index{
        background: #fff;
    }
    .index img{
        width:100%;
    }
    .items {
        height: 1.4rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .item {
        width: 1.11rem;
        height: .84rem;
        margin: 0 0.3rem 0.26rem;
        float: left;
    }
    .item p {
        font-size: 0.24rem;
        line-height: 0.4rem;
        text-align: center;
    }
</style>

