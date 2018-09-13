import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Meetups from '@/components/Meetup/Meetups.vue'
import Create from '@/components/Meetup/Create.vue'
import profile from '@/components/User/profile.vue'
import Signin from '@/components/User/Signin.vue'
import Signup from '@/components/User/Signup.vue'
import Meetup from '@/components/Meetup/Meetup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'Create',
      component: Create
    },
    {
      path: '/meetups/:id',
      name: '/Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
