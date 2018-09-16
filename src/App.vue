<template>

  <v-app>
    <v-navigation-drawer temporary 
      fixed
      app v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItem" 
        :key="item.title"
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="error">
      <v-toolbar-side-icon @click.stop="sideNav=!sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItem" 
        :key="item.title"
        :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
     <main>
     <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      sideNav: false,
      menuItem: [
        {icon: 'supervisor_account', title: 'ViewMeetups', link: '/meetups'},
        {icon: 'person', title: 'Profile', link: '/profile'},
        {icon: 'room', title: 'Organize Meet up', link: '/meetup/new'},
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'}
      ]
    }
  },
  name: 'App'
}
</script>
<style lang="stylus">
  @import "./stylus/main.styl"
  
.nav {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
