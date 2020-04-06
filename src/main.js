import Vue from 'vue';
import Vuex from "vuex";
import App from './App.vue';
import router from './router';
import store from "./store/store.js";
import config from "./config.js";
import funciones from "./funciones";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from "axios";
import api from "./api";

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Globales
window.axios = axios;
window.funciones = funciones;
window.config = config;
window.api = api;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
});
