import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Shamim Ara'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    eventsTotal: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENTS_TOTALS(state, eventsTotal) {
      state.eventsTotal = eventsTotal;
    },
    SET_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit('SET_EVENTS', response.data);
          // console.log(response.data);
          // this.events = response.data;
        })
        .catch(err => console.error(err));
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id);
      if (event) {
        commit('SET_EVENT', event);
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data);
            // this.event = response.data;
          })
          .catch(err => console.error(err));
      }
    }
  },
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});
