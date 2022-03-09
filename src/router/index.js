import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/profile'),
        children: [
            {
                path: '',
                name: 'ProfilePost',
                component: () =>
                    import(/* webpackChunkName: "profile" */ '../views/profile/post')
            },
            {
                path: 'igtv',
                name: 'ProfileIGTV',
                component: () =>
                    import(/* webpackChunkName: "profile" */ '../views/profile/igtv')
            },
            {
                path: 'save',
                name: 'ProfileSave',
                component: () =>
                    import(/* webpackChunkName: "profile" */ '../views/profile/save')
            },
            {
                path: 'tag',
                name: 'ProfileTag',
                component: () =>
                    import(/* webpackChunkName: "profile" */ '../views/profile/tag')
            }
        ]
    },
    {
        path: '/explore',
        name: 'explore',
        component: () => import(/* webpackChunkName: "explore" */ '../views/explore')
    },
    {
        path: '/direct',
        name: 'direct',
        component: () => import(/* webpackChunkName: "explore" */ '../views/direct')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
