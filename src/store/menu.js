const state = {
    data: {},
    default: {
        items:[
            {
                title: 'Дашборд',
                route: 'dashboard',
                icon: 'mdi-home',
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
                icon: 'mdi-home',
                active: false,
                route: 'project',
                data: {
                    id: 1,
                    pages: 12,
                    created_at: "23.12.1995",
                    routePrefix: "project",
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
                icon: 'mdi-home',
                active: false,
                route: 'project',
                data: {
                    id: 2,
                    pages: 128,
                    created_at: "23.12.2005",
                    routePrefix: "project",
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
};

const actions = {
    setActiveMenuState({commit}, data) {
        commit('setActiveMenuState', data)
    }
};
const mutations = {
    setActiveMenuState(state, data) {
        state.data = state[data];
    }
};

const getters = {
    getData: (state) => {
        console.log(123, state.data);
        return state.data
    },
    getDefault: (state) => {
        return state.default
    },
};

export const menuStates = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};