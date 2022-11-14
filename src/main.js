import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import './assets/main.css';
import ListPost from './components/ListPost.vue';
import DetailPost from './components/DetailPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ListPost,
      name: 'Home'
    },
    {
        path: '/article/:id',
        component: DetailPost,
        name: 'Article',
        props: true
    },
    {
        path: '/article/:genre',
        component: DetailPost,
        name: 'Article'
    }
  ]
})

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app')
