<template>
  <div class="hello111">
    <div>订单列表</div>
    <ul>
      <li>9475124512</li>
      <li>9475124513</li>
      <li>9475124514</li>
      <li>9475124515</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      msg: '我的订单'
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
</style>
