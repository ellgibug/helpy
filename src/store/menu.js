const state = {
    data: {},
    default: {
        items:[
            {
                title: 'Дашборд',
                route: 'dashboard',
                id: 0,
                active: false
            }
        ]
    },
    profile: {
        appendSearch: false,
        items:[

        ]
    },
    projects: {
        appendSearch: true,
        items:[
            {
                id: 1,
                title: 'Проект 1',
                active: false,
                data: {
                    id: 1,
                    pages: [
                        {
                            title: 'Страница 1',
                            route: 'page',
                            id: 100,
                            active: false,
                            data: {
                                id: 100,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 2',
                            route: 'page',
                            id: 101,
                            active: false,
                            data: {
                                id: 101,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 3',
                            route: 'page',
                            id: 102,
                            active: false,
                            data: {
                                id: 102,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 4',
                            route: 'page',
                            id: 104,
                            active: false,
                            data: {
                                id: 104,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 5',
                            route: 'page',
                            id: 105,
                            active: false,
                            data: {
                                id: 105,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 6',
                            route: 'page',
                            id: 106,
                            active: false,
                            data: {
                                id: 106,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        }
                    ],
                    created_at: "23.12.1995",
                    buttons: [
                        {
                            title: "Просмотр",
                            route: "view",
                        },
                        {
                            title: "Скрипт",
                            route: "script",
                        },
                        {
                            title: "Безопасность",
                            route: "security",
                        },
                        {
                            title: "Экспортировать",
                            route: "export",
                        }
                    ]
                }
            },
            {
                id: 2,
                title: 'Проект 2',
                active: false,
                data: {
                    id: 2,
                    pages: [
                        {
                            title: 'Страница 1',
                            route: 'page',
                            id: 100,
                            active: false,
                            data: {
                                id: 100,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 2',
                            route: 'page',
                            id: 101,
                            active: false,
                            data: {
                                id: 101,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Страница 3',
                            route: 'page',
                            id: 102,
                            active: false,
                            data: {
                                id: 102,
                                buttons: [
                                    {
                                        title: "Просмотр",
                                        route: "page",
                                        active: false
                                    }
                                ]
                            }
                        }
                    ],
                    created_at: "23.12.2005",
                    buttons: [
                        {
                            title: "Просмотр",
                            route: "view",
                            active: false
                        },
                        {
                            title: "Скрипт",
                            route: "script",
                            active: false
                        },
                        {
                            title: "Безопасность",
                            route: "security",
                            active: false
                        },
                        {
                            title: "Экспортировать",
                            route: "export",
                            active: false
                        }
                    ]
                }
            },
        ]
    },
    pages: {
        items:[]
    },
};

const actions = {
    setActiveMenuState({commit}, data) {
        commit('setActiveMenuState', data)
    },
    setActiveProject({commit}, data) {
        commit('setActiveProject', data)
    },
};
const mutations = {
    setActiveMenuState(state, data) {
        state.data = state[data];
    },
    setActiveProject(state, data) {
        state.pages.items = data;
    },
};

const getters = {
    getData: (state) => {
        return state.data
    },
    getDefault: (state) => {
        return state.default
    },
    getProjectById: state => id => {
        return state.projects.items.find(p => p.id == id);
    }
};

export const menuStates = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};