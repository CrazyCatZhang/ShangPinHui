import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes/routes";

Vue.use(VueRouter)

let originalPush = VueRouter.prototype.push
let originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject)
    } else {
        originalPush.call(this, location, () => {
        }, () => {
        })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject)
    } else {
        originalReplace.call(this, location, () => {
        }, () => {
        })
    }
}

const router = new VueRouter({
    routes
})

export default router