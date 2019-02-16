import Vue from 'vue'
import Vuex from 'vuex'

import data from './assets/capsule-text.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
   state: {
      capsules: data
   },
   actions: {
      
   },
   getters: {

   },
   mutations: {

   }
})