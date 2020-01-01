export const landing = [
    {
        path: "/",
        name: "landing",
        component: () => import("../views/landing/index"),
        meta: {
            layout: 'Landing',
            title: 'Landing'
        }
    },
];
