require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

Vue.use(VueRouter);



import {routes} from './routes/web.js';

const router = new VueRouter({
    routes
});


const app = new Vue({
    el: '#app',
    router
});
