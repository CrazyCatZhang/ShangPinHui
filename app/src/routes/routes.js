import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";

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
]