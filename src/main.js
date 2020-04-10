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
import * as firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Globales
window.axios = axios;
window.funciones = funciones;
window.config = config;
window.api = api;

const configOptions = {
  apiKey: "AIzaSyCg_0bvL3l8ngTWtHq7XKMYWGcVDN0-Br0",
  authDomain: "raus-dev.firebaseapp.com",
  databaseURL: "https://raus-dev.firebaseio.com",
  projectId: "raus-dev",
  storageBucket: "raus-dev.appspot.com",
  messagingSenderId: "940849416430",
  appId: "1:940849416430:web:050d89da32d27a139dcbff",
  measurementId: "G-FR58CRN1SF"
};
firebase.initializeApp(configOptions);

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
