import store from '@/store/store'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/RegisterView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/BooksView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('../views/ResourcesView.vue')
  },
  {
    path: '/syllabus',
    name: 'syllabus',
    component: () => import('../views/SyllabusView.vue'),
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: () => import('../views/ChatView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const restrictedPages = ['/profile'];
  const authRequired = restrictedPages.includes(to.path);
  const isAuth = store.state.isLoggedIn;

  if (authRequired && !isAuth) {
    return next('/login');
  }

  if ((to.path === '/login' || to.path === '/register') && isAuth) {
    return next('/');
  }

  next();
});

export default router
