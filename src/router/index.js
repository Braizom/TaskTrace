import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Parameters from '../views/Parameters.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import ToDolist from '../views/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/parameters',
    name: 'parameters',
    component: Parameters
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: ToDolist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
