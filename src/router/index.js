import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import HomeworkEC from '../views/HomeworkEC';

Vue.use(VueRouter);

const vueRouter = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            alias: '/index.html',
            name: 'home',
            component: Home
        },
        {
            path: '/homeworkEC',
            name: 'homeworkEC',
            component: HomeworkEC
        }
    ]
});

vueRouter.beforeEach((to, from, next) => {
    next();
});
// vueRouter.afterEach((to, from) => {
//   if( to == from)
// });

export default vueRouter;
