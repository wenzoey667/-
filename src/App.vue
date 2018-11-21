<template>
  <div id="app">
    <router-view/>
    <navs></navs>
  </div>
</template>

<script>
  import navs from './components/navs'
  export default {
    name: 'App',
    components:{
      navs
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
img{
  display: block;
}
ul,li{
  list-style: none;
}
.left{
  float: left;
}
.right{
  float: right;
}
.clear::after{
  display: block;
  content: '';
  clear: both;
}
</style>
