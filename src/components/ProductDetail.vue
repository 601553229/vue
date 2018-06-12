<template>
    <div class="hello">
        <div>订单{{ msg }} 详情</div>

    </div>
</template>

<script>
    export default {
        name: 'ProductDetail',
        data () {
            return {
                msg: this.$route.params.id//this.$route.query.id 两种接受参数方式

            }
        },
        mounted: function () {
            console.log(this.$route.params.id);
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

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
