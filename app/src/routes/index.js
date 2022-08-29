import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/routes/routes";
import store from "@/store";

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

router.beforeEach(async (to, from, next) => {
    let hasToken = store.state.user.token;
    let hasNickName = store.state.user.nickName;
    if (hasToken) {
        if (to.path === "/login") {
            next('/home');
        } else {
            if (hasNickName) {
                next();
            } else {
                try {
                    await store.dispatch('user/getUserInfo');
                    next();
                } catch (error) {
                    await store.dispatch('user/userLogout');
                    next('/login');
                }
            }
        }
    } else {
        let toPath = to.path;
        if (toPath.indexOf('trade') !== -1 || toPath.indexOf('pay') !== -1 || toPath.indexOf('center') !== -1) {
            next('/login?redirect=' + toPath);
        } else {
            next();
        }
    }
})

export default router