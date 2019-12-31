import Vue  from 'vue';
import Vuex from 'vuex';

import {menuStates}  from "./menu"


Vue.use(Vuex);

const virtual = new Vuex.Store({
    modules: {
        menuStates
    }
});

export const store = virtual;