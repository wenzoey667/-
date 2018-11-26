import Vue from 'vue'
import Router from 'vue-router'
import heads from '../components/index/heads.vue'
import index from '../components/index/home/home'
import recommen from '../components/index/recommen/recommen'
import homedesign from '../components/index/homedesign/homedesign'
import activity from '../components/index/activity/activity'
import productgroup from '../components/index/productgroup/productgroup'
import detail from '../components/detail/detail'
import category from '../components/category/category'
import inner from '../components/category/inner'
import cart from '../components/cart/cart'
import infos from '../components/infos/infos'
import contents from '../components/contents/contents'
import xijie from '../components/contents/xijie'
import mine from '../components/mine/mine'
import register from '../components/mine/register'
import login from '../components/mine/login'
import my from '../components/mine/my'
import lodingPayment from '../components/mine/lodingPayment'
import m_all from '../components/mine/m/all.vue'
import m_payment from '../components/mine/m/payment.vue'
import m_shipments from '../components/mine/m/shipments.vue'
import m_arrival from '../components/mine/m/arrival.vue'
import m_end from '../components/mine/m/end.vue'
import m_quit from '../components/mine/quit.vue'
import collect from '../components/mine/collect.vue'
import gift from '../components/mine/gift.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    component: heads,
    children:[{
      path: 'home',
      component: index
    },{
      path: 'recommen',
      component: recommen
    },{
      path: 'homedesign',
      component: homedesign
    },{
      path: 'activity',
      component: activity
    },{
      path: 'productgroup/:id',
      component: productgroup
    }]
  },{
    path:'/register',
    component:register
  },{
    path:'/login',
    component:login
  },
  {
    path:'/category',
    component:category
  },{
    path:'/inner/:id',
    component:inner,
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/infos',
    component:infos
  },
  {
    path: '/contents',
    component: contents,
  },
  {
    path: '/xijie',
    component: xijie,
  },
  {
    path:'/mine',
    component: mine,
    children: [
    {
      path:'my',
      component: my
    },
    {
      path: 'quit',
      component: m_quit
    },
    {
      path: 'collect',
      component: collect
    },
    {
      path: 'gift',
      component: gift
    },
    {
      path:'lodingPayment',
      component: lodingPayment,
      children: [
        {
          path: 'all',
          component: m_all
        },
        {
          path: 'payment',
          component: m_payment
        },
        {
          path: 'shipments',
          component: m_shipments
        },
        {
          path: 'arrival',
          component: m_arrival
        },
        {
          path: 'end',
          component: m_end
        }
      ]
    }
    ]
  },
  {
    path: '/detail/:id',
    component: detail
  },{
    path: '/',
    redirect: '/index/home'
  }/*,{
    path: '*',
    redirect: '/index/home'
  }*/]
})