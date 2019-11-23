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

import auth from '../middleware/auth';

Vue.use(VueRouter);

let routes = [
    { path: '/', name: 'login', component: require('../components/login/Login.vue').default},
    { path: '/dashboard', name: 'dashboard', component: require('../components/dashboard/Dashboard.vue').default, meta: { middleware: auth}},
    { path: '/settings', name: 'settings', component: require('../components/dashboard/settings/Settings.vue').default, meta: { middleware: auth }},

    { path: '/subscription', name: 'subscription', component: require('../components/dashboard/subscription/Subscription.vue').default, meta: { middleware: auth}},

    { path: '/email-catcher', name: 'email-catcher', component: require('../components/emailCatcher/pages/entry/EmailCatcher.vue').default, meta: { middleware: auth }},
    { path: '/email-catcher/catchers', name: 'email-catcher-overview', component: require('../components/emailCatcher/pages/catchers/Catchers.vue').default, meta: { middleware: auth }},
    { path: '/email-catcher/themes', name: 'email-catcher-themes', component: require('../components/emailCatcher/pages/themes/EmailCatcherTheme.vue').default, meta: { middleware: auth }},
    { path: '/email-catcher/subscriptions', name: 'email-catcher-subscriptions', component: require('../components/emailCatcher/pages/subscriptions/CatcherSubscriptions.vue').default, meta: { middleware: auth }},

    { path: '/social-proof', name: 'social-proof', component: require('../components/socialProof/pages/entry/SocialProof.vue').default, meta: { middleware: auth }},
    { path: '/social-proof/types', name: 'social-proof-types', component: require('../components/socialProof/pages/types/Types.vue').default, meta: { middleware: auth }},
    { path: '/social-proof/messages', name: 'social-proof-messages', component: require('../components/socialProof/pages/messages/Messages.vue').default, meta: { middleware: auth }},
    { path: '/social-proof/settings', name: 'social-proof-settings', component: require('../components/socialProof/pages/settings/Settings.vue').default, meta: { middleware: auth }},
];

export const router = new VueRouter({
    routes
});

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
        // Run the default Vue Router `next()` callback first.
        context.next(...parameters);
        // Than run the subsequent Middleware with a new
        // `nextMiddleware()` callback.
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

window.router = router;





