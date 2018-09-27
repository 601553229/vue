// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import axios from './axios'//封装了一下axios
import VueAwesomeSwiper from 'vue-awesome-swiper';//引入vue swiper插件

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
/*import axios from 'axios'
import qs from 'qs'
Vue.prototype.$axios = axios;
//post传参序列化
axios.interceptors.request.use(function(config){
    //在发送请求之前做某事
    if(config.method === 'post'){
        config.data=qs.stringify(config.data);
    }
    return config;
},function(error){
    //请求错误时做些事
    return Promise.reject(error);
});*/



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
//设置页面的title，路由发生变化修改页面title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
FastClick.attach(document.body);
(function (doc, win) {
    // 分辨率Resolution适配
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750 && clientWidth <= 1000) {
                docEl.style.fontSize = 100 + 'px';
            } else if (clientWidth >= 1000) {
                docEl.style.fontSize = 100 * (1000 / 750) + 'px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
