<template>
    <div class="index">
        <div class="banner">
            <img src="../assets/images/banner.jpg" alt="">
        </div>
        <img src="../assets/images/item_top1.jpg" class="tipImg" alt="">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img src="http://yxianypin.jieyoushequ.com/jieyou2/daojia/web/images/inst2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="http://yxianypin.jieyoushequ.com/jieyou2/daojia/web/images/inst3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="http://yxianypin.jieyoushequ.com/jieyou2/daojia/web/images/inst4.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="http://yxianypin.jieyoushequ.com/jieyou2/daojia/web/images/inst5.jpg" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <IndexItem :items="item"></IndexItem>
        <div class="trust">
            <div class="trust-title">
                <img src="../assets/images/item_top3.jpg" alt="">
            </div>
            <div class="trust-item">
                <div class="trust-big">
                    <img src="../assets/images/imgtip1.jpg" alt="">
                </div>
                <div class="trust-small">
                    <img src="../assets/images/imgtip2.jpg" alt="">
                    <img src="../assets/images/imgtip3.jpg" alt="">
                </div>
            </div>
        </div>
        <!--<div class="tabBtn">
            <router-link to="IceBox">
                <div :class="btnColor==1? 'red':'black'" v-on:click="changeStatus">冰箱</div>
            </router-link>
            <router-link to="Condition">
                <div :class="btnColor==2? 'red':'black'" v-on:click="changeStatus2">空调</div>
            </router-link>
        </div>
        <router-view></router-view>-->
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css';
    import IndexItem from './IndexItem.vue'
    export default {
        name: 'Index',
        data () {
            return {
                msg: 'index',
                btnColor: 1,
                item:[
                    {'name':'空调','id':'23','imgPath':'kongtiao'},
                    {'name':'冰箱','id':'21','imgPath':'bingxiang'},
                    {'name':'电视','id':'20','imgPath':'dianshi'},
                    {'name':'洗衣机','id':'22','imgPath':'xiyiji'},
                ],
                swiperOption: {
                    notNextTick: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    },
                    speed:1000,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    paginationType:"bullets",
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    loop:true,
                    pagination: {
                       el: ".swiper-pagination",
                       clickable: true
                    }
                }

            }
        },
        components:{
            swiper,
            swiperSlide,
            IndexItem
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
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
            //console.log('this is current swiper instance object', this.swiper)
            //this.swiper.slideTo(3, 1000, false)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .banner {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        overflow: hidden;
    }

    .banner img {
        width: 100%;
    }

    .tabBtn {
        width: 100%;
        height: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #fff;
        border-top: 1px solid #eee;
    }

    .tabBtn a {
        width: 50%;
        color: #666;
    }

    .tabBtn a:nth-child(1) {
        border-right: 1px solid #ddd;
    }

    .myHome {
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.3rem;
        border-top: 1px solid #eee;
        background: #27d9d9;
        position: fixed;
        bottom: 0;
        left: 0;
        color: #fff;
    }
    .tipImg{
        width:100%;
        display: block;
    }
    .swiper-slide img{
        width:100%;
    }
    .trust {
        background: #fff;
        margin-top: 0.2rem;
        padding-bottom: 0.55rem;
        width:100%;
        height:auto;
        overflow: hidden;
    }
    .trust-item {
        width: 100%;
        height: 2.7rem;
        display: flex;
        justify-content: center;
    }
    .trust-title img{
        width:100%;
    }
    .trust-big {
        width: 3.7rem;
        height: 100%;
    }
    .trust-item img {
        width: 100%;
    }
    .trust-small {
        width: 3.8rem;
        height: 100%;
        background: #fff;
        padding-left: 0.1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .trust-small img {
        width: 100%;
        height: 1.3rem;
    }
</style>
<style>
    .swiper-pagination-bullet-active{
        background:#ffd3d6!important;
    }
</style>
