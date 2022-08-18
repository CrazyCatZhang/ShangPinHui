import request from "@/api/request";

export const reqCategory = () => request({method: 'get', url: '/product/getBaseCategoryList'})
