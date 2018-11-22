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
import cart from '../components/cart/cart'

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
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path: '/detail/:id/:parentid',
    component: detail
  },{
    path: '/',
    redirect: '/index/home'
  },{
    path: '*',
    redirect: '/index/home'
  }]
})
