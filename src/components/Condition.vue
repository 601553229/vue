<template>
  <div class="condition">
    <ul>
      <li>空调1</li>
      <li>空调2</li>
      <li>空调3</li>
      <li>空调4</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'Condition',
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
.condition ul{
  display: flex;width:100%;height:auto;overflow: hidden;justify-content: space-around;align-items: center;flex-wrap: wrap;padding:0 0.3rem;
}
.condition li{
  width:3rem;height:2rem;border:1px solid #aaa;text-align: center;line-height: 2rem;margin-top:0.4rem;
}
</style>
