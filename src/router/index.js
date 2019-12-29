import Vue from "vue";
import Router from "vue-router";
import Meta from 'vue-meta';

import Landing from "../views/landing/index";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Dashboard from "../views/inside/dashboard";

Vue.use(Meta);
Vue.use(Router);


const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "landing",
			component: Landing,
			meta: {
				layout: 'Landing',
				title: 'Landing'
			}
		},
		{
			path: "/login",
			name: "login",
			component: Login,
			meta: {
				layout: 'Auth',
				title: 'Login'
			}
		},
		{
			path: "/register",
			name: "register",
			component: Register,
			meta: {
				layout: 'Auth',
				title: 'Register'
			}
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: Dashboard,
			meta: {
				layout: 'Inside',
				title: 'Dashboard'
			}
		},
		// {
		// 	path: "8",
		// 	name: "errors",
		// 	component: Dashboard,
		// 	meta: {
		// 		layout: 'Inside',
		// 		title: 'Dashboard'
		// 	}
		// }
	]
});

export default router;