import { userResource } from "@/data/user";
import { createRouter, createWebHistory } from "vue-router";
import { session } from "./data/session";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/pages/Home.vue"),
		redirect: {
			name: "ProductsListPage",
		},
		meta: {
			RequireLogin: false,
		},
	},
	{
		path: "/products",
		name: "ProductsListPage",
		component: () => import("@/pages/Products.vue"),
	},
];

const router = createRouter({
	history: createWebHistory("/store"),
	routes,
});

router.beforeEach(async (to, from, next) => {
	let isLoggedIn = session.isLoggedIn;
	try {
		await userResource.promise;
	} catch (error) {
		isLoggedIn = false;
	}

	if (to.meta.RequireLogin && !isLoggedIn) {
		// redirect to login
		window.location.href = "/login?redirect-to=/store" + to.fullPath;
	}
	next();
});

export default router;
