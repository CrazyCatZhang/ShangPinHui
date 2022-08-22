import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default [
    {
        path: '/home',
        component: Home,
        meta: {isShown: true}
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: {isShown: true}
    },
    {
        path: '/login',
        component: Login,
        meta: {isShown: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {isShown: false}
    }
]