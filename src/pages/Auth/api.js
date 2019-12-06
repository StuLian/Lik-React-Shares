import request from '../../api/request.js'

export const loginApi = (params) => {
    return request('post', '/user/login', params)
}

export const registerApi = (params) => {
    return request('post', '/user/register', params)
}

export const sendCodeApi = (params) => {
    request('post', '/user/send_sms', params)
}