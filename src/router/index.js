import Vue from "vue";
import Router from "vue-router";
import Meta from 'vue-meta';

import Landing from "../views/landing/index";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Dashboard from "../views/inside/dashboard";
import Project from "../views/inside/project";
// import ProjectView from "../views/inside/projectView";
// import ProjectScript from "../views/inside/projectScript";
// import ProjectSecurity from "../views/inside/projectSecurity";
// import ProjectExport from "../views/inside/projectExport";
import Profile from "../views/inside/profile";

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
		{
			path: "/project/:id",
			name: "project",
			component: Project,
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
			// component: ProjectView,
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
			component: Profile,
			meta: {
				layout: 'Inside',
				title: 'Profile'
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





