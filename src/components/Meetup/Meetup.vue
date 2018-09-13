<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                     <h6 class="primary--text">My Meetup</h6>
                    </v-card-title>
                    <v-card-media
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
                    height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">18th July 2019</div>
                        <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Veritatis explicabo recusandae molestias officiis ex corrupti obcaecati iusto, 
                        autem cum voluptates fuga voluptate suscipit at laboriosam? Itaque asperiores nemo nihil minus?
                        </div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn class="error">Register</v-btn>
                    </v-card-action>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetups(this.id)
    }
  }
}
</script>