import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import AddProfile from '../components/AddProfile.vue'
import cloneProfile from '../components/cloneProfile.vue'
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
    path : '/AddProfile',
    name : 'AddProfile',
    component: AddProfile
  },
  {
    path:'/cloneProfile/:id',
    name : 'cloneProfile',
    component: cloneProfile
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
