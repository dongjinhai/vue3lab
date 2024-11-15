import { createApp } from "vue";
import "./style.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import { router } from "./routers";
import { setupStore } from "./store";

import i18nPlugin from "./plugins/i18n";

function msg(s: any) {
  alert(s);
}

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
});
setupStore(app);
app.config.globalProperties.$msg = msg;
app.mount("#app");
