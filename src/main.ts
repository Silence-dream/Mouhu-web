import { createApp } from "vue";
// 引入默认样式清除
import "../public/css/reset.css";
// 引入 ElementPlus UI
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router);
app.use(ElementPlus).mount("#app");
