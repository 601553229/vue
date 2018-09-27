<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html{-ms-text-size-adjust: 100%; -webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; -webkit-overflow-scrolling: touch;}
body{ font-family: "Microsoft YaHei", Helvetica, STHeiTi, sans-serif;background-color: #f2f2f2;font-size: 0.32rem}
table { border-collapse: collapse; border-spacing: 0 }
fieldset, img { border: 0 }
ul, li, ol { list-style: none; }
button, input { border: 0;background: 0; -webkit-appearance: none;outline: 0 }
a:hover{ text-decoration: none; }
a img{border:0}
a { -webkit-touch-callout: none; text-decoration: none;outline: 0;border:none;-webkit-tap-highlight-color: transparent;-webkit-user-select: none;color:#000}
::-webkit-input-placeholder { color: #c3c3c3;font-family:"Microsoft YaHei", Helvetica}
label {cursor:pointer;}
*{margin: 0;padding: 0;box-sizing: border-box;outline: 0;-webkit-tap-highlight-color: transparent;  -ms-word-break:break-all;word-break:break-all;-ms-word-wrap:break-word;word-wrap:break-word;-webkit-text-size-adjust: none;}

/* 页面加载 */
.mo-mark { position: fixed; width: 100%; height: 100%; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0,0,0,0.5); z-index: 9999; display: none; }
.mo-mark:after { content: ''; width: 1rem; height: 1rem; background: url(http://static.huishoubao.com/mobile/img/wechatcard/load.gif) no-repeat; background-size: 100%; position: fixed; left: 50%; top: 50%; margin-left: -0.5rem; margin-top: -0.5rem; z-index: 10000; }

/*...超出换行样式*/
.warpstyle{
  text-overflow: ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;overflow: hidden;
}

</style>
