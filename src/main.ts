import { createApp } from "vue";
// 引入默认样式清除
import "../public/css/reset.css";
// 引入 ElementPlus UI
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElLoading } from "element-plus";

axios.defaults.baseURL = "http://api.vikingship.xyz/api";
// let loadingInstance = ElLoading.service({});

const app = createApp(App);
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // loadingInstance = ElLoading.service({
  //   lock: true,
  //   text: "加载中",
  //   fullscreen: true,
  //   spinner: "el-icon-loading"
  // });
  return config;
});
axios.interceptors.response.use(
  (config: AxiosResponse) => {
    // setTimeout(() => {
    // loadingInstance.close();
    // }, 200);
    return config;
  },
  e => {
    const { data } = e.response;
    // console.log(data);
    store.state.error.message = data.error;
    store.state.error.status = true;
    return Promise.reject(data.error);
  }
);
// axios.interceptors.request.use(config => {
//   store.commit('setLoading', true)
//   store.commit('setError', { status: false, message: '' })
//   return config
// })

app
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
