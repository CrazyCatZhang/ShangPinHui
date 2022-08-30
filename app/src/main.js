import Vue from 'vue'
import App from './App.vue'
import router from "@/routes";
import TypeNav from "@/components/TypeNav";
import store from "@/store";
import '@/mock/mockServer'
import {Button, Carousel, carouselItem, Message, MessageBox, Pagination} from "element-ui";

Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.use(Carousel)
Vue.use(carouselItem)
Vue.use(Pagination)
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
