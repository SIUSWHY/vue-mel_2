import Vue from 'vue'
import Router from 'vue-router'
import App from './views/App.vue'
import Thanks from './views/Thanks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    }
  ]
})
