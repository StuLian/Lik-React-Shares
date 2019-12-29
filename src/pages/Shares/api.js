import request from '../../api/request.js'

export const zxShares = (params) => {
    return request('post', '/favorites/lists', params)
}

export const hsShares = (params) => {
    return request('post', '/gupiao/lists', params)
}