import request from '../../api/request.js'

export const sharesInfo = (params) => {
    return request('post', '/gupiao/get_info', params)
}

export const addShares = (params) => {
    return request('post', '/favorites/add', params)
}

export const removeShares = (params) => {
    return request('post', '/favorites/remove', params)
}