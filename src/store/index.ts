import { createStore } from 'vuex'

export default createStore({
  state: {
    checkfilelist:[]
  },
  getters: {
  },
  mutations: {
    increment (state,data) {
      state.checkfilelist=data
    },
    resetState(state){
      state.checkfilelist=[]
    }
  },
  actions: {
  },
  modules: {
  }
})
