import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Register from "@/pages/Register";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/myOrder";
import TeamOrder from "@/pages/Center/teamOrder";

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
        meta: {isShow: true},
        beforeEnter: (_, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        meta: {isShow: true},
        beforeEnter: (_, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {isShow: true},
        beforeEnter: (_, from, next) => {
            if (from.path === '/pay') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/center',
        component: Center,
        meta: {isShow: true},
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'teamorder',
                component: TeamOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
]