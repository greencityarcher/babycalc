<template>
  <div>

  </div>
</template>
<script>
import routes from './routes'
export default{
  data: function(){
    return{
      currentRoute: window.location.pathname
    }

  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent).$mount(this.ViewComponent)
  }
}
</script>
