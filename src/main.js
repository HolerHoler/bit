import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
Vue.use(Antd);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")