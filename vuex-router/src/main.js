// 引入全局垫片
import "core-js/stable";
// // 被@babel/preset-env 的依赖引入的，polyfill。使得支持yield
import "regenerator-runtime/runtime";

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

export default new Vue({
	router,
  store,
	render: (h) => h(App),
}).$mount('#app');