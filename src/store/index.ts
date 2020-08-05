import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import currentCorporateer from "../../testdata/currentCorporateer";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authHeader: {},
    currentCorporateer: {},
    currentInfluences: [],
    sender: [],
    receiver: []
  },
  mutations: {
    updateAuthHeader(state, authHeader) {
      state.authHeader = authHeader;
    },
    updateCurrentCorporateer(state, currentCorperateer) {
      state.currentCorporateer = currentCorperateer;
    },
    updateCurrentInfluences(state, currentInfluences) {
      state.currentInfluences = currentInfluences;
    },
    updateSender(state, sender) {
      state.sender = sender;
    },
    updateReceiver(state, receiver) {
      state.receiver = receiver;
    }
  },
  actions: {
    updateAuthHeader({commit}) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token };
      commit('updateAuthHeader', header);
    },
    updateCurrentCorporateer({commit, state}, corperateerData) {
      commit('updateCurrentCorporateer', corperateerData);
    },
    setCurrentInfluences({commit, state}) {
      axios.get('https://influencesysapi.thecorporateer.com/currentInfluences/', {
        headers: state.authHeader
      }).then((response) => commit("updateCurrentInfluences", response.data))
    },
    setSender({commit, state}) {
      axios.get('https://influencesysapi.thecorporateer.com/transactions/sender', {
        headers: state.authHeader
      }).then((response) => commit("updateSender", response.data))
    },
    setReceiver({commit, state}) {
      axios.get('https://influencesysapi.thecorporateer.com/transactions/receiver', {
        headers: state.authHeader
      }).then((response) => commit("updateReceiver", response.data))
    },
  },
  modules: {}
})
