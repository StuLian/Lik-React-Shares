import request from '../../api/request.js'

export const myShares = (params) => {
    return request('post', '/gupiao/my_gupiao_lists', params)
}