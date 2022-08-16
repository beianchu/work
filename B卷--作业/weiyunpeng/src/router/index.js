import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/table",
    name:"table",
    component:()=>import('../views/TableView.vue'),
    meta: [{
      path: "/table",
      title: "表格"
    }, {
      path: "/tab",
      title: "tab选项卡"
    }]
  },
  {
    path:"/tab",
    name:"tab",
    component:()=>import('../views/TabView.vue'),
    meta: [{
      path: "/table",
      title: "表格",
      flag:false,
    }, {
      path: "/tab",
      title: "tab选项卡",
       flag: false,
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
