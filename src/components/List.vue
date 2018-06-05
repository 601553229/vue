<template>
  <div class="hello222">
    <div>我的列表</div>
    <ul>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'List',
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
