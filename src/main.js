import Vue from 'vue';
import Vuex from "vuex";
import App from './App.vue';
import router from './router';
import store from "./store/store.js";
import socket from "./socket.js";
import config from "./config.js";
import funciones from "./funciones";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from "axios";
import api from "./api";
import * as firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';

Vue.use(Vuelidate);
Vue.use(VueToast, {
  position: 'top'
});

// Globales
window.axios = axios;
window.funciones = funciones;
window.config = config;
window.api = api;
window.socket = socket;

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

firebase.auth().onAuthStateChanged(user => {
  var _uid = "";
  if (user) {
    console.log("user is loggin");
    _uid = "";
    _uid = user.uid;
    
    store().state.isLoggedIn = true;
    api.post('auth/isloggin/', {id: _uid, is_loggin: true}).then(res => {
      console.log(res);
    }).catch(err => {
      console.log("error: ", err);
    });
  } else {
    console.log("user is not loggin");
    store().state.isLoggedIn = false;
    
    if (router.currentRoute.name != "login") {
      if (router.currentRoute.name === "register" || router.currentRoute.name === "validarNumero") {
        console.log("...");
      } else {
        router.push("/");
      }
    }
  }
});

Vue.use(BootstrapVue);

Vue.config.productionTip = true;
Vue.use(Vuex);

export const EventBus = new Vue();
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
});