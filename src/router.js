import Vue from 'vue';
import router from 'vue-router';
import Login from '@/pages/login';
import Register from '@/pages/register';
import validarNumero from '@/pages/ValidarNumero';
import Home from '@/pages/home';
import Tutorial from '@/pages/tutorial';
import recovery from '@/pages/recovery';
import Restaurante from '@/pages/detalles-restaurantes';


Vue.use(router);

export default new router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/validar-numero',
      name: 'validarNumero',
      component: validarNumero
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/recovery/:token',
      name: 'recovery',
      component: recovery
    },
    {
      path: '/restaurante',
      name: 'restaurante',
      component: Restaurante
    }
  ]
})
