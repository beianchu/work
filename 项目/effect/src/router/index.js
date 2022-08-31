import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "login"
	},
	{
		path: '/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Basis/login/loginView.vue')
	},
	{
		path: '/Once',
		name: 'Once',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/common/OnceView.vue'),
		children: [
			{
				path: '/One',
				name: 'One',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/firstPage/OneView.vue')
			},

			{
				path: '/loginText',
				name: 'loginText',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/loginText/LoginTxtView.vue')
			},
			{
				path: '/operation',
				name: 'operation',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/operate/OperationVeiw.vue')
			},
			{
				path: '/jobs',
				name: 'jobs',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/management/JobsView.vue')
			},
			{
				path: '/rank',
				name: 'rank',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/Rank/RankView.vue')
			},
			{
				path: '/department',
				name: 'department',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/department/Department.vue')
			},
			{
				path: '/menu',
				name: 'menu',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/menu/MenuView.vue')
			},
			{
				path: '/users',
				name: 'users',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/users/user-management.vue')
			},
			{
				path: '/roles',
				name: 'roles',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Basis/roles/role-management.vue')
			},

		]
	},


]

const router = new VueRouter({
	routes
})

export default router