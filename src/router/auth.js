export const auth = [
    {
        path: "/login",
        name: "login",
        component: ()=>"../views/auth/login",
        meta: {
            layout: 'Auth',
            title: 'Login'
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => "../views/auth/register",
        meta: {
            layout: 'Auth',
            title: 'Register'
        }
    }
];
