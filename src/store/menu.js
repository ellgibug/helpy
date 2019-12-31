const state = {
    data: {},
    profile: {
        appendSearch: false,
        items:[
            {
                title: 'Дашборд',
                route: 'dashboard',
                icon: 'mdi-home',
                active: false
            }
        ]
    },
    // название
    // кол-во страниц
    // дата создания
    // просмотр скрипт пароль экспортировать
    // при переходе на страницу делать актив дата каким-то из пунктов в сторе
    projects: {
        appendSearch: true,
        items:[
            {
                title: 'Дашборд',
                route: 'dashboard',
                icon: 'mdi-home',
                active: false
            },
            {
                title: 'Проект 1',
                icon: 'mdi-home',
                active: false,
                data: {
                    id: 1,
                    pages: 12,
                    created_at: "23.12.1995",
                    routePrefix: "project",
                    buttons: [
                        {
                            title: "Просмотр",
                            id: "view",
                        },
                        {
                            title: "Скрипт",
                            id: "script",
                        },
                        {
                            title: "Безопасность",
                            id: "security",
                        },
                        {
                            title: "Экспортировать",
                            id: "export",
                        }
                    ]
                }
            },
            {
                title: 'Проект 2',
                icon: 'mdi-home',
                active: false,
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
        state.data = data;
    }
};

const getters = {
    getData: (state) => {
        return state.data
    },
};

export const menuStates = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};