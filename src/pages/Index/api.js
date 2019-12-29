import request from '../../api/request.js'

export const sharesInfo = (params) => {
    return request('post', '/gupiao/index_gp', params)
}

export const newsList = (params) => {
    return request('post', '/news/lists', params)
}