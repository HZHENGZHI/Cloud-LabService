import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainLayout.vue'),
    children:[
      {
        path:'/disk',
        component:() => import('../views/CloudDisk.vue'),
        children:[
          {
            path:'/disk/detail/',
            name:'kkk',
            component:()=>import('../components/filebrowser.vue')
          }
        ]
      },
      {
        path:'/index',
        component:() =>import('../views/ServiceStatus.vue')
      },
      {
        path:'/reimburse',
        component:() => import('../views/ToReimburse.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
