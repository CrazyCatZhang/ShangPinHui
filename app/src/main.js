import Vue from 'vue'
import App from './App.vue'
import router from "@/routes";
import TypeNav from "@/components/TypeNav";
import store from "@/store";
import '@/mock/mockServer'
import {Carousel, carouselItem} from "element-ui";

Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.use(Carousel)
Vue.use(carouselItem)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
