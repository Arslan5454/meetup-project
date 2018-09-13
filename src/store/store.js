import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg',
        id: 'dsadsadsa212',
        date: '2017-07-17'},
      {
        imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: 'fdssadsad2322',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'jkdshfsajkhf234', registeredMeetups: ['dsadsadsa212']
    }
  },
  actions: {},
  mutations: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
