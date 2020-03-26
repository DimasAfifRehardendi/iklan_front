import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Register from '../views/Register.vue'
import Iklan from '../views/Iklan_Saya.vue'
import FormIklan from '../views/Form_Crud_Iklan.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Motor from '../views/Motor.vue'
import Mobil from '../views/Mobil.vue'
import Fashion from '../views/Fashion.vue'
import Elektronik from '../views/Elektronik.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'beranda',
    components: {default: Beranda, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/iklan',
    name: 'iklan',
    component: Iklan
  },
  {
    path: '/formiklan',
    name: 'formiklan',
    component: FormIklan
  },
  {
    path: '/motor',
    name: 'motor',
    components: {default: Motor, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/mobil',
    name: 'mobil',
    components: {default: Mobil, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/elektronik',
    name: 'elektronik',
    components: {default: Elektronik, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/fashion',
    name: 'fashion',
    components: {default: Fashion, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
