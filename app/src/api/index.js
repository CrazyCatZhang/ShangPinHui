import request from "@/api/request";
import mockRequest from "@/api/mockRequest";

export const reqCategory = () => request({method: 'get', url: '/product/getBaseCategoryList'})

//获取首页轮播图数据的接口
export const reqBannerList = () => mockRequest({url: '/banner', method: 'get'});

//获取Floor数据接口
export const reqFloorList = () => mockRequest({url: '/floor', method: 'get'});

export const reqSearchList = (data) => request({url: '/list', method: 'post', data})

//详情模块商品的数据
export const reqDetailList = (skuId) => request({url: `/item/${skuId}`, method: 'get'})

export const reqAddOrUpdateCart = (skuId, skuNum) => request({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})

export const reqShopCart = () => request({url: '/cart/cartList', method: 'get'})

export const reqDeleteCart = (skuId) => request({url: `/cart/deleteCart/${skuId}`, method: 'delete'})

export const reqUpdateChecked = (skuId, isChecked) => request({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})

export const reqGetCode = (phone) => request({url: `/user/passport/sendCode/${phone}`, method: 'get'})

export const reqRegister = (data) => request({url: `/user/passport/register`, method: 'post', data})

export const reqUserLogin = (data) => request({url: `/user/passport/login`, method: 'post', data})

export const reqUserInfo = () => request({url: `/user/passport/auth/getUserInfo`, method: 'get'})

export const reqUserLogout = () => request({url: `/user/passport/logout`, method: 'get'})

export const reqAddressInfo = () => request({url: `/user/userAddress/auth/findUserAddressList`, method: 'get'});

export const reqShopInfo = () => request({url: `/order/auth/trade`, method: 'get'})

export const reqSubmitOrder = (tradeNo, data) => request({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data
})

export const reqPayInfo = (orderId) => request({url: `/payment/weixin/createNative/${orderId}`, method: 'get'})

export const reqPayResult = (orderId) => request({url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get'})

export const reqMyOrderList = (page, limit) => request({url: `/order/auth/${page}/${limit}`, method: 'get'})
