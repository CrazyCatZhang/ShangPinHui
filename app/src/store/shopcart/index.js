import {SET_USERID} from "@/utils/USER_ID";
import {reqDeleteCart, reqShopCart, reqUpdateChecked} from "@/api";

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
    },
    async changeChecked(_, {skuId, isChecked}) {
        const result = await reqUpdateChecked(skuId, isChecked)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    async changeAllChecked({state, dispatch}, isChecked) {
        const result = []
        state.shopCartInfo[0].cartInfoList.forEach(cartInfo => {
            const promise = dispatch('changeChecked', {skuId: cartInfo.skuId, isChecked})
            result.push(promise)
        })
        return Promise.all(result)
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