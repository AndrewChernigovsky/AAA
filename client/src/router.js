// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Academy from './pages/Academy.vue';
import Author from './pages/Author.vue';
import Home from './pages/Home.vue';
import News from './pages/News.vue';
import First from './pages/groups/First.vue';
import Helper from './pages/projects/Helper.vue';
import Page404 from './pages/Page404.vue';

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
    path: '/academy',
    name: 'Academy',
    component: Academy,
  },
  {
    path: '/author',
    name: 'Author',
    component: Author,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/first',
    name: 'First',
    component: First,
  },
  {
    path: '/helper',
    name: 'Helper',
    component: Helper,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
