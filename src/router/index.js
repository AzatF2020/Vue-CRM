import { createRouter, createWebHistory } from 'vue-router'
import VHome from "@/views/Home/VHome.vue";
import VDefault from "@/layouts/default/VDefault.vue";

const routes = [
  {
    path: '/',
    component: VDefault,
    children: [
      {
        path: '',
        component: VHome,
      },
      {
        path: 'login',
        component: () => import('@views/Login/VLogin.vue'),
      },
      {
        path: 'categories',
        component: () => import('@views/Categories/VCategories.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
