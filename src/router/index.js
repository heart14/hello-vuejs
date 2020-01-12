import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue'),
    children: [
      {
        path:'',
        redirect:'images'
      }, {
        path:'images',
        component:()=>import(/* webpackChunkName: "about" */ '../views/manage/Images.vue')
      }, {
        path:'videos',
        component:()=>import(/* webpackChunkName: "about" */ '../views/manage/Videos.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {
    path: '/usercenter/:userId',
    name: 'usercenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserCenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
