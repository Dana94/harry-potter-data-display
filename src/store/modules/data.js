import axios from "@/axios-auth";

const state = {
  members: []
};

const mutations = {
  ADD_MEMBERS(state, { members }) {
    state.members = members;
  }
};

const actions = {
  LOAD_MEMBERS({ commit }) {
    axios
      .get("/houses?key=" + process.env.VUE_APP_KEY)
      .then(function(response) {
        commit("ADD_MEMBERS", {
          members: response.data.map(house => house.members.length)
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

const getters = {
  getMembers(state) {
    return state.members;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
