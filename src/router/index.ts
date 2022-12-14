import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignPage from '../views/SignPage.vue'
import AddProfile from '../components/AddProfile.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path:'/LoginPage',
    name : 'LoginPage',
    component:LoginPage
  },
  {
    path : '/SignPage',
    name : 'SignPage',
    component : SignPage
  },
  {
    path : '/AddProfile',
    name : 'AddProfile',
    component: AddProfile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
