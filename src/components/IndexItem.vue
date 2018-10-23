<template>
    <div class="index">
        <img src="../assets/images/item_top2.jpg" class="tipImg" alt="">
        <div class="items">
            <!--<router-link v-for="item in items" :key="item.id" :to="'/Enquiry/'+item.id" >-->
            <router-link v-for="item in items" :key="item.id" :to="'/'" >
                <div class="item">
                    <img :src="require(`../assets/images/${item.imgPath}.jpg`)" alt="">
                    <p>{{item.name}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexItem',
        props:['items'],
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
            console.log(this.items);
            console.log(this.$route.params.id);
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

