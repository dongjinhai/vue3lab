import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routers";

import i18nPlugin from "./plugin/i18n";

function msg(s: any) {
  alert(s);
}

const app = createApp(App);
app.use(router);
app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
});
app.config.globalProperties.$msg = msg;
app.mount("#app");
