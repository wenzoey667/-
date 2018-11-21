import Vue from 'vue'
import Router from 'vue-router'
import heads from '../components/index/heads.vue'
import index from '../components/index/home/home'
import recommen from '../components/index/recommen/recommen'
import homedesign from '../components/index/homedesign/homedesign'
import activity from '../components/index/activity/activity'

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
    }]
  },{
    path: '/',
    redirect: '/index/home'
  },{
    path: '*',
    redirect: '/index/home'
  }]
})
