import Vue from "vue";
import Router from "vue-router";
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(Router);

import {auth} from "./auth";
import {dashboard} from "./dashboard";
import {landing} from "./landing";
import {profile} from "./profile";
import {projects} from "./projects";

let routes = [];

for (let route of [
	...auth,
	...dashboard,
	...landing,
	...profile,
	...projects
]) {
	routes.push(route);
}



const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: routes
});

export default router;