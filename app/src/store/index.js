import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

import home from "@/store/home";
import search from "@/store/search";

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})