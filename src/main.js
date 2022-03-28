import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import setRem from "./setRem";
import "./assets/icon/iconfont.css";
import "./css/reset.css";
Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  require("./mock/index");
}
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

setRem(750, 100);
window.addEventListener("resize", function () {
  setRem(750, 100);
});
