import {SET_USERID} from "@/utils/USER_ID";
import {reqShopCart} from "@/api";

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