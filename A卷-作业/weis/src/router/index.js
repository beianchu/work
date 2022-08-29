import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'students',
   
  },
  {
    path: "/comm",
    name: "comm",
    component: () => import('../components/Commom.vue/commom.vue'),

  },
  {
    path: "/students",
    name: "students",
    component: () => import('../views/StudentsView.vue'),
    meta: {
      title: "学生管理"
    }
  },
  {
    path: "/teacher",
    name: "teacher",
    component: () => import('../views/TeacherView.vue'),
    meta: {
      title: "教师管理"
    }
  },
  {
    path: "/assistant",
    name: "assistant",
    component: () => import('../views/AssistantView.vue'),
    meta: {
      title: "助教管理"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "助教管理"
    }
  }

]

const router = new VueRouter({
  routes
})

export default router