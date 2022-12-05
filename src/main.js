import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import './assets/main.css';
import ListeArticle from './components/ListeArticle.vue';
import IdPost from './components/IdPost.vue';
import Login from './components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ListeArticle,
      name: 'Home'
    },
    {
      path: '/article/id/:id',
      component: IdPost,
      name: 'Article',
      props: true
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
      props: true
    }
  ]
})

const app = createApp(App);

app.use(router);

app.mount('#app')
