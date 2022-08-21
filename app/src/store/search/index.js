import {reqSearchList} from "@/api";

const state = {
    searchList: {}
}

const actions = {
    async getSearchList({commit}, data = {}) {
        const result = await reqSearchList(data)
        if (result.code === 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}

const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}