export const projects = [
    {
        path: "/project/new",
        name: "newProject",
        component: () => import("../views/inside/projects/newProject"),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    // {
    //     path: "/project/:id",
    //     name: "project",
    //     component: () => import("../views/inside/projects/project"),
    //     meta: {
    //         layout: 'Inside',
    //         title: 'Project'
    //     }
    // },
    {
        name: 'newPage',
        path: '/project/:id/new',
        component: () => import('../views/inside/projects/newPage'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    {
        name: 'view',
        path: '/project/:id/view',
        component: () => import('../views/inside/projects/view'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    {
        name: 'script',
        path: '/project/:id/script',
        component: () => import('../views/inside/projects/script'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    {
        name: 'security',
        path: '/project/:id/security',
        component: () => import('../views/inside/projects/security'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }

    },
    {
        name: 'export',
        path: '/project/:id/export',
        component: () => import('../views/inside/projects/export'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    {
        name: 'page',
        path: '/page/:id',
        component: () => import('../views/inside/projects/page'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    {
        name: 'edit',
        path: '/page/:id/edit',
        component: () => import('../views/inside/projects/edit'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
    {
        name: 'actions',
        path: '/page/:id/actions',
        component: () => import('../views/inside/projects/actions'),
        meta: {
            layout: 'Inside',
            title: 'Project'
        }
    },
];