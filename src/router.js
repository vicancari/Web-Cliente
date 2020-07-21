import Vue from 'vue';
import router from 'vue-router';
import Login from '@/pages/login';
import Register from '@/pages/register';
import validarNumero from '@/pages/ValidarNumero';
import Home from '@/pages/home';
import Home2 from '@/pages/home2';
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
      path: '/home/searching=:search',
      name: 'home2',
      component: Home2
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
      path: '/restaurante/:id',
      name: 'restaurante',
      component: Restaurante
    }
  ]
})
