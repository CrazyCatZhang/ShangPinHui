import {reqDetailList} from "@/api";

const state = {
    detailInfo: {}
}

const actions = {
    async getDetailInfo({commit}, skuId) {
        const result = await reqDetailList(skuId)
        if (result.code === 200) {
            commit('GETDETAILINFO', result.data)
        }
    }
}

const mutations = {
    GETDETAILINFO(state, detailInfo) {
        state.detailInfo = detailInfo
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