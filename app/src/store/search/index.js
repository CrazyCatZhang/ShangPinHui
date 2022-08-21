import {reqSearchList} from "@/api";

const state = {
    searchList: {}
}

const actions = {
    getSearchList({commit}, data) {
        const result = reqSearchList(data)
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