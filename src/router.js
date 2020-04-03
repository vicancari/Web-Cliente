import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import validarNumero from '@/pages/ValidarNumero'
import Home from '@/pages/home';
import Tutorial from '@/pages/tutorial'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
