import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Register from "@/pages/Register";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";

export default [
    {
        path: '/home',
        component: Home,
        meta: {isShow: true}
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: {isShow: true}
    },
    {
        path: '/login',
        component: Login,
        meta: {isShow: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {isShow: false}
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/detail/:skuId?',
        component: Detail,
        name: 'detail',
        meta: {isShow: true},
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: {isShow: true},
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {isShow: true}
    },
    {
        path: '/trade',
        component: Trade,
        meta: {isShow: true}
    },
    {
        path: '/pay',
        component: Pay,
        meta: {isShow: true}
    },
]