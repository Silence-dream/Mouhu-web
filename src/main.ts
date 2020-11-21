import { createApp } from "vue";
// 引入 ElementPlus UI
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus).mount("#app");
