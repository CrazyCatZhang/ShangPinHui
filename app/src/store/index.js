import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

import home from "@/store/home";
import search from "@/store/search";
import detail from "@/store/detail";

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail
    }
})