import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 普通请求  后台api之外请求  不做拦截  ---------天气api
export const request = (option) => {
	http.interceptor.response = (response) => {
		return response;
	}
    return http.request(option)
}

// 后台请求 ---------真实后台api
export const reqApi = (option) => {
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		var res = response.data
		console.log(res)
		if(res.code !== 0){
			uni.showToast({
				title: `错误码:${res.code}: ,${res.message}`,
				icon: "none"
			})
		}
		return response;
	}
	return http.request(option)
}

export default {
	request,reqApi
}