require('./bootstrap');

window.Vue = require('vue');

import {store} from './store/store.js';
import {router} from './routes/web.js';

axios.request({
    url: "/oauth/token",
    method: "post",
    baseURL: "https://api.frontier.social",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Headers': 'X-CSRF-Token',
    },
    data: {
        "grant_type": "client_credentials",
        "client_id": '1',
        "client_secret": "LudUgCxb8aOX1Wibc2KT8Vo2PvuHpkZtO08YCLN6",
        'Content-Type': 'application/x-www-form-urlencoded'
    },
}).then(function(res) {
    localStorage.setItem("token", res.data.access_token);

    // add the accesstoken to the authorization header for every request
    window.axios.defaults.headers['Authorization'] = res.data.access_token;
    window.axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
    window.axios.defaults.headers['Access-Control-Allow-Headers'] = 'X-CSRF-Token';

});



const app = new Vue({
    el: '#app',
    router,
    store
});


