import {SET_USERID} from "@/utils/USER_ID";
import {reqDeleteCart, reqShopCart} from "@/api";

const state = {
    shopCartInfo: [],
    USER_ID: SET_USERID(),
}

const actions = {
    async getShopCart({commit}) {
        const result = await reqShopCart()
        if (result.code === 200) {
            commit('GETSHOPCART', result.data)
        }
    },
    async deleteShopCart(_, skuId) {
        const result = await reqDeleteCart(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject()
        }
    }
}

const mutations = {
    GETSHOPCART(state, payload) {
        state.shopCartInfo = payload;
    }
}

const getters = {
    CartInfo(state) {
        return state.shopCartInfo[0] || {};
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}