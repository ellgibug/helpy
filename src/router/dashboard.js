export const dashboard = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/inside/dashboard"),
        meta: {
            layout: 'Inside',
            title: 'Dashboard'
        }
    },
];
