import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: {
            name: "login"
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login')
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/Welcome')

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

let token = localStorage.getItem('token');

router.beforeEach((to, from, next) => {
    if (to.fullPath !== '/login' && token == null) {
        next('/login')
    } else {
        next()
    }

});

export default router
