import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes/routes";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

VueRouter.prototype.replace = function (location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return {y: 0}
    }
})

export default router