export const auth = [
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
];
