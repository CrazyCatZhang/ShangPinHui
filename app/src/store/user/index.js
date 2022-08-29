import {reqGetCode, reqRegister, reqUserLogin} from "@/api";

const state = {
    code: '',
    token: ''
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
    },
    async userLogin({commit}, data) {
        const result = await reqUserLogin(data)
        console.log(result)
        if (result.code === 200) {
            commit('GETTOKEN', result.data.token)
            return 'ok'
        } else {
            return Promise.reject()
        }
    }
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    GETTOKEN(state, token) {
        state.token = token
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