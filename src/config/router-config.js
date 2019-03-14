// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/statistics/orderlist',
    children: [ // 一级菜单
      {
        path: '/statistics',
        name: 'statistics',
        component: RouteView,
        redirect: '/statistics/orderlist',
        meta: { title: '数据统计', keepAlive: true, icon: 'bar-chart' },
        children: [
          {
            path: '/statistics/orderlist',
            name: 'orderlist',
            component: () => import('@/views/statistics/order-list'),
            meta: { title: '订单记录', keepAlive: true }
          },
          {
            path: '/statistics/order',
            name: 'orderStatistics',
            component: () => import('@/views/statistics/order-statistics'),
            meta: { title: '订单统计', keepAlive: true }
          },
          {
            path: '/statistics/production',
            name: 'productionStatistics',
            component: () => import('@/views/statistics/production-statistics'),
            meta: { title: '制作统计', keepAlive: true }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
