import axios from 'axios'
import { MessageBox } from 'element-ui'
import {
	getToken,
	removeToken
} from 'utlist/auth'

// 创建一个 axios实例 
const http = axios.create({
	// 存放 公用的url路径的
	baseURL: '/',
	// 设置网络请求超时时间
	timeout: 3000,
	withCredentials: true,
	headers: {
		'Content-type': 'application/json; charset=utf-8'
	}
})

// 请求拦截
http.interceptors.request.use(
	// 成功会走第一个参数
	(config) => {
		config.headers['token'] = getToken()
		return config
	},
	// 如果发送请求失败 会走第二个参数
	(error) => {

		return error
	}
)

// 响应拦截
http.interceptors.response.use(
	// 成功 走第一个回调函数
	(result) => {
		return result.data
	},
	// 失败走第二个回调函数
	(error) => {
		let title = ''
		let message = ''
		if (error && error.response) {
			message = error.response.data.message
			switch (
				error.response.status
			) {
				case 400:
					title = "错误请求"
					break
				case 401:
					title = '资源未授权'
					break
				case 403:
					title = '禁止访问'
					break
				case 404:
					title = '未找到所请求的资源'
					break
				case 405:
					title = '不允许使用该方法'
					break
				case 408:
					title = '请求超时'
					break
				case 500:
					title = '内部服务器错误'
					break
				case 501:
					title = '未实现'
					break
				case 502:
					title = '网关错误'
					break
				case 503:
					title = '服务不可用'
					break
				case 504:
					title = 'http版本不受支持'
				default:
					title = error.response.status
			}
			return MessageBox.alert(message,title,{
				type:'warning'
			})
		}else{
			return MessageBox.alert('请联系系统管理员,或稍后再试！','未知错误',{
				type:'error'
			})
		}
	}
)
export default http