import { createStore } from 'vuex'
import { mapMutations } from "vuex";

export default createStore({
  state: {
    changeModalShow: true,
  },
  mutations: {
    ...mapMutations(['toggleChangeModal'])
    // toggleChangeModal: (state) => {
    //   state.changeModalShow =! state.changeModalShow
    // }
  },
  getters: {
    changeModalShow: (state) => {
      return state.changeModalShow
    }
  }
})
