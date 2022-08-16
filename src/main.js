import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons';
import {far} from "@fortawesome/free-regular-svg-icons";
import store from './store'
import axios from "axios"
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

axios.defaults.baseURL='http://127.0.0.1:8000';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

library.add(fas, far, fab);
const app = createApp(App);
app.use(moshaToast);
app.use(store);
app.component("FAIFatma", FontAwesomeIcon)
app.use(router, axios);
app.mount("#app");