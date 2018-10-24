/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application.
|
*/

import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

let routes = [
    { path: '/login', component: require('../components/login/Login.vue')},
    { path: '/dashboard', component: require('../components/dashboard/Dashboard.vue')},
    { path: '/social-proof', component: require('../components/socialProof/pages/entry/SocialProof.vue')},
    { path: '/social-proof/types', component: require('../components/socialProof/pages/types/Types.vue')},
    { path: '/social-proof/messages', component: require('../components/socialProof/pages/messages/Messages.vue')},
    { path: '/social-proof/settings', component: require('../components/socialProof/pages/settings/Settings.vue')},
];

export const router = new VueRouter({
    routes
});






