const api = require('../api')
// 获取电影
const getFilmsList = (callback) => {
    api.request({
        url: '/ajax/movieOnInfoList?token=',
        success: (data) => {
            callback(data)
        }
    })
}

module.exports = {
    getFilmsList
}