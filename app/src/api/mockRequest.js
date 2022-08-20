import axios from "axios"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

const mockRequest = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

mockRequest.interceptors.request.use((config) => {
    NProgress.start()
    return config
})

mockRequest.interceptors.response.use(res => {
    NProgress.done()
    return res.data
}, err => {
    return Promise.reject(new Error(err.message))
})

export default mockRequest