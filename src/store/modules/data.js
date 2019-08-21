import axios from "@/axios-auth";

const state = {
  //members: [],
  houses: []
};

const mutations = {
  ADD_MEMBERS(state, { members }) {
    state.members = members;
  },
  ADD_HOUSES(state, { houses }) {
    state.houses = houses;
  }
};

const actions = {
  LOAD_HOUSE_DATA({ commit }) {
    axios
      .get("/houses?key=" + process.env.VUE_APP_KEY)
      .then(function(response) {
        // commit("ADD_MEMBERS", {
        //   members: response.data.map(house => house.members.length)
        // });
        commit("ADD_HOUSES", {
          houses: response.data.map(house => {
            return {
              members: house.members.length,
              name: house.name
            };
          })
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

const getters = {
  // getMembers(state) {
  //   return state.members;
  // },
  getHouses(state) {
    return state.houses;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
