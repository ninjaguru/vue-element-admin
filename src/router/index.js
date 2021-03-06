import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'permissionList',
        component: () => import('@/views/permission/permissionList'),
        name: 'PermissionList',
        meta: {
          title: 'permissionList',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/edit',
    component: Layout,
    redirect: '/edit/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'edit',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'editSingle',
        component: () => import('@/views/edit/editSingle'),
        name: 'EditSingle',
        meta: {
          title: 'editSingle',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'editMulti',
        component: () => import('@/views/edit/editMulti'),
        name: 'EditMulti',
        meta: {
          title: 'editMulti',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
