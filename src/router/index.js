import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que você deseja rotear
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import ToDoList from '../components/ToDoList.vue';

// Crie o roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/toDoList',
      name: 'ToDoList',
      component: ToDoList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
});

// Exporte o roteador
export default router;