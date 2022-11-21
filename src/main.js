import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import './assets/main.css';
import ListeArticle from './components/ListeArticle.vue';
import IdPost from './components/IdPost.vue';
import GenrePost from './components/GenrePost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ListeArticle,
      name: 'Home'
    },
    {
        path: '/article/:id',
        component: IdPost,
        name: 'Article',
        props: true
    },
    {
        path: '/article/:genre',
        component: GenrePost,
        name: 'ArticleGenre'
    }
  ]
})

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app')
