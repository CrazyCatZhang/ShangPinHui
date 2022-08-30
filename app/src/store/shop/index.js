import {reqShopInfo, reqSubmitOrder} from "@/api";

const state = {
    shopInfo: {},
    payId: ''
}

const actions = {
    async getShopInfo({commit}) {
        const result = await reqShopInfo()
        if (result.code === 200) {
            commit('GETSHOPINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    async submitInfo({commit}, {tradeNo, data}) {
        const result = await reqSubmitOrder(tradeNo, data)
        if (result.code === 200) {
            commit('SUBMITINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    }
}

const mutations = {
    GETSHOPINFO(state, shopInfo) {
        state.shopInfo = shopInfo
    },
    SUBMITINFO(state, payId) {
        state.payId = payId
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