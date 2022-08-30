import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

import home from "@/store/home";
import search from "@/store/search";
import detail from "@/store/detail";
import shopcart from "@/store/shopcart";
import user from "@/store/user";
import shop from "@/store/shop";
import pay from "@/store/pay";

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        shop,
        pay
    }
})