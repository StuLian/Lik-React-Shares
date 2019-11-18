import Vue from 'vue'
import axios from 'axios'
import transParam from '../utils/qs'
import router from '../router/index'
import {
	Toast
} from 'mint-ui';

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://gupiao.dev.huatang168.cn:8091/rest/2.0'
// axios.defaults.baseURL = 'http://api.rrsmb.top/rest/2.0'

// 请求拦截器
axios.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

// 响应拦截器
axios.interceptors.response.use(
	response => {
		if (response.status == 200) {
			if (response.data.error_code) {
				// 提示 二次
				// 如果error_code 是 120107 或者 120101 清除token，跳转到登录页 其余弹出错误信息 response.data.error_msg
				if(response.data.error_code == 120107 || response.data.error_code == 120101){
					Toast('登录已过期，请重新登录');
					setTimeout(() => {
						localStorage.removeItem('shares_token');
						router.push('/login');
					},500)
				}else{
					Toast(response.data.error_msg);
					return 'error';
				}
			} else {
				return response.data.response_data
			}
		} else {
			console.error('接口错误');
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export default function request(method, url, data) {
	method = method.toLocaleLowerCase()
	if(!data){
		data = {}
	}
	if(!data.access_token){
		data.access_token = localStorage.getItem('shares_token') ? localStorage.getItem('shares_token') : '';
	}else{
		data.access_token = localStorage.getItem('shares_token');
	}
	data = transParam(data)
	if (method == 'post') {
		return axios.post(url, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	} else if (method == 'get') {
		return axios.get(url, {
			params: data
		})
	} else if (method == 'delete') {
		return axios.delete(url, {
			params: data
		})
	}
}
