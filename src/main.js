import { createApp } from "vue";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import router from "./routes/router.js";
import App from "./App.vue";

library.add(fas);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
