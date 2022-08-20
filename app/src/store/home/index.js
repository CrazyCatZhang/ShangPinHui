import {reqBannerList, reqCategory, reqFloorList} from "@/api";

const state = {
    category: [],
    bannerList: [],
    floorList: []
}

const actions = {
    async getCategory({commit}) {
        const result = await reqCategory()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({commit}) {
        const result = await reqBannerList()
        if (result.code === 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({commit}) {
        const result = await reqFloorList()
        if (result.code === 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, category) {
        state.category = category
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
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