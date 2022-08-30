// 引入axios
import router from "@/router"
import axios from "axios"
import { MessageBox } from "element-ui"
import {
	config
} from "vue/types/umd"
import {
	getToken,
	removeToken
} from "./auth"
// 创建axios实例
const http = axios.create({
	// 请求公共路径
	baseURL: '/',
	timeout: 3000,
	withCredentials: true,
	headers: {
		'Content-type': 'application/json; charset=utf-8'
	}
})
//请求拦截
http.interceptors.request.use(
	/**成功的回调函数 */
	(config) => {
		config.headers['token'] = getToken()
		return config
	},
	/**失败的回调函数 */
	(error) => {
		return error
	}
)
/**响应拦截 */
http.interceptors.response.use(
	/**成功回调函数 */
	(request) => {
		removeToken()
		router.push({

			name: 'login'
		})
		return request
	},
	/**失败的回调 */
	(error) => {
		let title = ''
		let message = ''
		if (error && error.response) {
			message = error.response.data.message
			switch (error.response.status) {
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
					title = '未找到请求的资源'
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
						title='服务不可用'
						break
						case 504:
							title='网关超时'
							break
							default:
								title=error.response.status
			}
			return MessageBox.alert(message,title,{
				type:'warning'
			})
		}else{
			return MessageBox.alert('请联系系统管理员','稍后再试','未知错误',{
				type:'error'
			})
		}

	}
)