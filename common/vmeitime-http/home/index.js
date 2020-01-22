import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */


// 轮播图
export const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}
export const douyin = (data) => {
    return http.request({
        url: 'web/api/v2/hotsearch/billboard/word/',
        method: 'GET', 
		data,
		// handle:true
    })
}
// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
    banner,
	douyin
}