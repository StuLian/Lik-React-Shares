import request from '../../api/request.js'

export const record = (params) => {
    return request('post', '/user/my_assets_info', params)
}