import {reqPayInfo, reqPayResult} from "@/api";

const state = {
    payInfo: {}
}

const actions = {
    async getPayInfo({commit}, orderId) {
        const result = await reqPayInfo(orderId)
        if (result.code === 200) {
            commit('GETPAYINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    async getPayResult(_, orderId) {
        const result = await reqPayResult(orderId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject()
        }
    }
}

const mutations = {
    GETPAYINFO(state, payInfo) {
        state.payInfo = payInfo
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