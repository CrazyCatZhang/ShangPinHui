import {reqCategory} from "@/api";

const state = {
    category: []
}

const actions = {
    async getCategory({commit}) {
        const result = await reqCategory()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, category) {
        state.category = category
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