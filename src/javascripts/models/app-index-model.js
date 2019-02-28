const api = require('../api')
const {
    getPosition
} = require('../util')
// 获取正在热映电影
const getFilmsList = () => {
    return api.request({ url: '/ajax/movieOnInfoList?token=' })
}
// 即将上映推荐
const getComingRecommend = () => {
    return api.request({ url: '/ajax/mostExpected?ci=1&limit=10&offset=0&token=' })
}
// 即将上映轮播
const getComingBanner = () => {
    return api.mock({ url: 'http://localhost:8000/banner' })
}
// 即将上映列表
const getComingList = (movieIds) => {
    return api.request({ url: `/ajax/${movieIds ? 'moreComingList' : 'comingList'}?ci=1&token=&limit=10`, data: {
        movieIds
    }})
}
const getTestMock = () => {
    return api.mock({ url: 'http://localhost:8000/a/aa' })
}

const getZiRu = () => {
    return api.mock({ url: 'http://localhost:8000/ziru' })
}

const getIndex = () => {
    return api.mock({ url: 'http://localhost:8000/index' })
}

const getZu = () => {
    return api.request({ url: 'v7/room/list.json?city_code=110000&page=1&type=1&price=&face=&rface=&hface=&feature=&around=&leasetype=&tag=&version=&area=&subway_code=&subway_station_code=&district_code=&bizcircle_code=&clng=&clat=&suggestion_type=&suggestion_value=&keywords=&sort=' })
}

// 获取定位信息

const getPositionModel = () => {
    
    return getPosition()
}





module.exports = {
    getFilmsList,
    getTestMock,
    getComingBanner,
    getComingRecommend,
    getComingList,
    getPositionModel,
    getZiRu,
    getZu,
    getIndex
}






// return new Promise((resolve, reject) => {
    //     api.request({
    //         url: '/ajax/movieOnInfoList?token=',
    //         success: (data) => {
    //             resolve(data)
    //         }
    //     })
    // })