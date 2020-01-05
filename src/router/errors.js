export const errors = [
    {
        path: "*",
        name: "404",
        component: () => import("../views/errors/404"),
        meta: {
            layout: 'Errors',
            title: '404'
        }
    }
];
