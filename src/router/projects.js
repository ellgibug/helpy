export const projects = [
    {
        path: "/project/:id",
        name: "project",
        component: () => import("../views/inside/project"),
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
        name: 'page',
        path: '/page/:id',
        component: () => import('../views/inside/page'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
];