import { createRouter, createWebHistory } from 'vue-router'

// Routes
import IndexPage from '@/pages/IndexPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import HomePage from '@/pages/HomePage.vue'
import authGuard from '@/middlewares/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
      beforeEnter: authGuard
    },
  ],
})

export default router
