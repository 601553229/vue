<template>
  <div class="index">
    <div class="banner">
      <img src="../assets/images/banner.png" alt="">
    </div>

    <div class="tabBtn">
      <router-link to="IceBox"><div :class="btnColor==1? 'red':'black'" v-on:click="changeStatus">冰箱</div></router-link>
      <router-link to="Condition"><div :class="btnColor==2? 'red':'black'" v-on:click="changeStatus2">空调</div></router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
        msg: 'index',
        btnColor:1
    }
  },
    methods:{
        changeStatus:function(){
            this.btnColor=1;
        },
        changeStatus2:function(){
            this.btnColor=2;
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .banner{
    width:100%;height:auto;overflow: hidden;
  }
  .banner img{
    width:100%;
  }
  .tabBtn{
    width:100%;height:0.7rem;display: flex;justify-content: center;align-items: center;text-align: center;background: #fff;border-top:1px solid #eee;
  }
  .tabBtn a{
    width:50%;color: #666;
  }
  .tabBtn a:nth-child(1){
    border-right:1px solid #ddd;
  }
  .red{
    color:red;
  }
  .black{
    color:#666;
  }
</style>
