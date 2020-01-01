export const profile = [
    {
        path: "/profile",
        name: "profile",
        component: () => import("../views/inside/profile"),
        meta: {
            layout: 'Inside',
            title: 'Profile'
        }
    }
];
