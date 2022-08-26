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
