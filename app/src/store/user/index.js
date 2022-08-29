import {reqGetCode, reqRegister, reqUserInfo, reqUserLogin, reqUserLogout} from "@/api";

const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    nickName: ''
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
            localStorage.setItem('TOKEN', result.data.token)
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    async getUserInfo({commit}) {
        const result = await reqUserInfo()
        if (result.code === 200) {
            commit('GETUSERINFO', result.data.nickName)
            return 'ok'
        } else {
            return Promise.reject()
        }
    },
    async userLogout({commit}) {
        const result = await reqUserLogout()
        if (result.code === 200) {
            commit('CLEAR')
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
    },
    GETUSERINFO(state, nickName) {
        state.nickName = nickName
    },
    CLEAR(state) {
        state.token = ''
        state.nickName = ''
        localStorage.removeItem('TOKEN')
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