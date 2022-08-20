import request from "@/api/request";
import mockRequest from "@/api/mockRequest";

export const reqCategory = () => request({method: 'get', url: '/product/getBaseCategoryList'})

//获取首页轮播图数据的接口
export const reqBannerList = () => mockRequest({url: '/banner', method: 'get'});

//获取Floor数据接口
export const reqFloorList = () => mockRequest({url: '/floor', method: 'get'});