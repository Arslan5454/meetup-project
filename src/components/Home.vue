<template>
   <v-container>
       <v-layout row wrap >
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large route to="/meetups" class="success">Explore Meetups</v-btn>
           </v-flex>
           <v-flex xs12 sm6 class="text-xs-center text-sm-left">
               <v-btn large route to="/meetup/new" class="success">Organize Meetup</v-btn>
           </v-flex>
       </v-layout>
       <v-layout row wrap>
           <v-flex xs12>
               <v-carousel style="cursor: pointer">
                    <v-carousel-item
                         v-for="meetup in meetings"
                        :src="meetup.imageUrl"
                        :key="meetup.id"
                        @click="onLoadedMeetup(meetup.id)">
                </v-carousel-item>
                 </v-carousel>
           </v-flex>
       </v-layout>
   </v-container>
</template>
<script>
  export default {
    computed: {
      meetings () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadedMeetup (id) {
        this.$route.push('/meetups/' + id)
      }
    }
  }
</script>
