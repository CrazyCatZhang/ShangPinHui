import {reqGetCode, reqRegister} from "@/api";

const state = {
    code: ''
}

const actions = {
    async getCode({commit}, phone) {
        const result = await reqGetCode(phone)
        if (result.code === 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    async userRegister(_, data) {
        const result = await reqRegister(data)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject()
        }
    }
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
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