// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Page404 from './pages/Page404.vue';
import Manual from './pages/Manual.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';

const routes = [
  {
    path: '/:catchAll(.*)', // Ловит все несуществующие маршруты
    component: Page404 // Компонент для 404
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/manual',
    name: 'Manual',
    component: Manual,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
