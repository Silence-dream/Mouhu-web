import { createApp } from "vue";
// 引入默认样式清除
import "../public/css/reset.css";
// 引入 ElementPlus UI
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import axios from "axios";
axios.defaults.baseURL = "http://api.vikingship.xyz/api";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
