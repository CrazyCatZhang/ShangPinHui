import {reqAddOrUpdateCart, reqDetailList} from "@/api";

const state = {
    detailInfo: {}
}

const actions = {
    async getDetailInfo({commit}, skuId) {
        const result = await reqDetailList(skuId)
        if (result.code === 200) {
            commit('GETDETAILINFO', result.data)
        }
    },
    async addOrUpdateCart(_, {skuId, skuNum}) {
        const result = await reqAddOrUpdateCart(skuId, skuNum)
        console.log(result)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject()
        }
    }
}

const mutations = {
    GETDETAILINFO(state, detailInfo) {
        state.detailInfo = detailInfo
    }
}

const getters = {
    skuInfo(state) {
        return state.detailInfo.skuInfo || {}
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}