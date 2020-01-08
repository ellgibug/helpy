export const profile = [
    {
        path: "/profile",
        name: "profile",
        component: () => import("../views/inside/profile/profile"),
        meta: {
            layout: 'Inside',
            title: 'Profile'
        }
    },
    {
        path: "/users",
        name: "users",
        component: () => import("../views/inside/profile/users"),
        meta: {
            layout: 'Inside',
            title: 'Profile'
        }
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../views/inside/profile/account"),
        meta: {
            layout: 'Inside',
            title: 'Profile'
        }
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("../views/inside/profile/projects"),
        meta: {
            layout: 'Inside',
            title: 'Profile'
        }
    },
    {
        path: "/appeals",
        name: "appeals",
        component: () => import("../views/inside/profile/appeals"),
        meta: {
            layout: 'Inside',
            title: 'Profile'
        }
    }
];
