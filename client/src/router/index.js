import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ParametersView from '@/views/ParametersView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ToDoListView from '@/views/ToDoListView.vue'
import UserDataService from '@/services/UserDataService'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/parameters',
    name: 'parameters',
    component: ParametersView,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requiresAuth: false }
  },
  {
    path: '/todolist/:id',
    name: 'todolist',
    component: ToDoListView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  UserDataService.auth()
    .then(() => {
      if (to.meta.requiresAuth) {
        next()
      } else {
        next('/home')
      }
    })
    .catch(() => {
      if (to.meta.requiresAuth) {
        next('/')
      } else {
        next()
      }
    })
})

export default router
