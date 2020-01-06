import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {store} from './store'
import router from './router';
import CKEditor from '@ckeditor/ckeditor5-vue';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use( CKEditor );


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
