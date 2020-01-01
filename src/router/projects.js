export const projects = [
    {
        path: "/project/:id",
        name: "project",
        component: () => import('../views/inside/project'),
        children:[
            {
                name: 'view',
                path: 'view',
                component: () => import('../views/inside/projectView'),
                meta: {
                    layout: 'Inside',
                    title: 'Project'
                }
            },
            {
                name: 'script',
                path: 'script',
                component: () => import('../views/inside/projectView'),
                meta: {
                    layout: 'Inside',
                    title: 'Project'
                }
            },
            {
                named: 'security',
                path: 'security',
                component: () => import('../views/inside/projectView'),
                meta: {
                    layout: 'Inside',
                    title: 'Project'
                }

            },
            {
                name: 'export',
                path: 'export',
                component: () => import('../views/inside/projectView'),
                meta: {
                    layout: 'Inside',
                    title: 'Project'
                }
            }
        ],
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    }
];