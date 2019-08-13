import { stat } from "fs";

const state = {
  members: []
}

const mutations = {
  ADD_HOUSES(state, {houses}){

  },
  ADD_MEMBERS(state, {members}){
    state.members = members;
  }
}

const actions = {
  addHouses({commit}, payload) {
    //commit("ADD_HOUSES", payload)
  },
  addMembers({commit}, payload) {
    commit("ADD_MEMBERS", payload)
  }
}

const getters = {
  getMembers(state) {
    return state.members;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
