import request from '../../api/request.js'

export const sharesInfo = (params) => {
    return request('post', '/gupiao/get_info', params)
}