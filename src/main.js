import Vue from 'vue';
import App from './App.vue';
import router from './router';
import config from "@/config.js";
import funciones from "./funciones";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Globales
window.funciones = funciones;
window.config = config;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
});
