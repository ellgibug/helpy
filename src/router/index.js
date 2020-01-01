import Vue from "vue";
import Router from "vue-router";
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(Router);


const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "landing",
			component: () => import("../views/landing/index"),
			meta: {
				layout: 'Landing',
				title: 'Landing'
			}
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/auth/login"),
			meta: {
				layout: 'Auth',
				title: 'Login'
			}
		},
		{
			path: "/register",
			name: "register",
			component: () => import("../views/auth/register"),
			meta: {
				layout: 'Auth',
				title: 'Register'
			}
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: () => import("../views/inside/dashboard"),
			meta: {
				layout: 'Inside',
				title: 'Dashboard'
			}
		},
		{
			path: "/project/:id",
			name: "project",
			component: () => import("../views/inside/project"),
			children:[

			],
			meta: {
				layout: 'Inside',
				title: 'Project'
			}
		},
		{
			name: 'view',
			path: '/project/:id/view',
			component: () => import('../views/inside/projectView'),
			meta: {
				layout: 'Inside',
				title: 'Project'
			}
		},
		{
			name: 'script',
			path: '/project/:id/script',
			component: () => import('../views/inside/projectScript'),
			meta: {
				layout: 'Inside',
				title: 'Project'
			}
		},
		{
			name: 'security',
			path: '/project/:id/security',
			component: () => import('../views/inside/projectSecurity'),
			meta: {
				layout: 'Inside',
				title: 'Project'
			}

		},
		{
			name: 'export',
			path: '/project/:id/export',
			component: () => import('../views/inside/projectExport'),
			meta: {
				layout: 'Inside',
				title: 'Project'
			}
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../views/inside/profile"),
			meta: {
				layout: 'Inside',
				title: 'Profile'
			}
		}
	]
});

export default router;