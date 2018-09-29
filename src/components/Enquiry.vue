<template>
    <div class="icebox">
        <ul>
            <li v-for="(item,index) in proList" @click="proDetail(item.id)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Enquiry',
        data () {
            return {
                id:this.$route.params.id,
                msg: '我的订单',
                proList: [{
                    name: "海尔冰箱",
                    id: 110
                }, {
                    name: "格力冰箱",
                    id: 111
                }, {
                    name: "美的冰箱",
                    id: 112
                }, {
                    name: "吉德冰箱",
                    id: 113
                }],
            }
        },
        created: function () {
            console.log(this.id,111222333444)
            this.$axios.getAddressJson().then(function (res) {
                console.log(res)
            },function (res) {
                console.log("error:"+res)
            });

            this.$axios.getCateJson().then(function (res) {
                console.log(res)
            },function (res) {
                console.log("error:"+res)
            });

            //使用封装好的axios获取json-rpc接口数据
            this.$axios.getRpcJson('http://yxianypin.jieyoushequ.com/jieyou2/open/web/index.php?r=web-app',{
                jsonrpc: "2.0",
                method: "OrderListV",
                params: {phone:'18335182398'},
                id: "1"
            }).then(function(res){
                console.log(res,'success')
            },function(res){
                console.log(res,'error')
            })
//            this.$axios({
//                method: 'post',
//                url: 'http://localhost/cs/backend/web/index.php?r=test/index',
//                dataType: "json",
//            }).then(function(res){
//                console.log(res.data);
//            });
//            this.$axios({
//                method: 'post',
//                url: 'http://yxianypin.jieyoushequ.com/jieyou2/open/web/index.php?r=web-app',
//                xhrFields: {withCredentials: true},
//                dataType: "json",
//                contentType: "application/json-rpc",
//                data: {
//                    jsonrpc: "2.0",
//                    method: "OrderListV",
//                    params: {phone:'18335182398'},
//                    id: "1"
//                },
//                responseType: 'json' // 默认的
//            }).then(function(res){
//                console.log(res.data);
//            }).catch(function(err){
//                console.log(err);
//            })
        },
        methods: {
            proDetail: function (id) {

                //this.$route.push({path:'/xxx',query:{id:1}});//类似get传参，通过URL传递参数
                //this.$route.push({path:'/xxx',params:{id:1}});//类似post传参
                this.$router.push({name: 'ProductDetail', params: {id: id}})

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
    }

    .icebox ul {
        display: flex;
        width: 100%;
        height: auto;
        overflow: hidden;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 0.3rem;
    }

    .icebox li {
        width: 3rem;
        height: 2rem;
        border: 1px solid #aaa;
        text-align: center;
        line-height: 2rem;
        margin-top: 0.4rem;
    }
</style>
