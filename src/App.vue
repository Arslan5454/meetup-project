<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItem" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary" absolute>
      <v-toolbar-side-icon @click.native="sideNav=!sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItem" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
     <router-view></router-view>
    </main>
    <v-btn>Add me</v-btn>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItem: [
        {icon: 'supervisor_account', title: 'ViewMeetups'},
        {icon: 'person', title: 'Profile'},
        {icon: 'room', title: 'Organize Meet up'},
        {icon: 'face', title: 'Sign up'},
        {icon: 'lock_open', title: 'Sign In'}
      ]
    }
  },
  name: 'App'
}
</script>
