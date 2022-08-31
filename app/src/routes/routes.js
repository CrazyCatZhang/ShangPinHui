export default [
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {isShow: true}
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: {isShow: true}
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: {isShow: false}
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: {isShow: false}
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/detail/:skuId?',
        component: () => import('@/pages/Detail'),
        name: 'detail',
        meta: {isShow: true},
    },
    {
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {isShow: true},
        beforeEnter(to, from, next) {
            const skuNum = to.query.skuNum
            const skuInfo = JSON.parse(window.sessionStorage.getItem('SKUINFO'))
            console.log('---', skuNum, skuInfo)
            if (skuNum && skuInfo) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: {isShow: true}
    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
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
        component: () => import('@/pages/Pay'),
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
        component: () => import('@/pages/PaySuccess'),
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
        component: () => import('@/pages/Center'),
        meta: {isShow: true},
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/myOrder')
            },
            {
                path: 'teamorder',
                component: () => import('@/pages/Center/teamOrder')
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
]