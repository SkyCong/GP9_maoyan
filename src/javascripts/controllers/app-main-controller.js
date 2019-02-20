
const { getFilmsList } = require('../models/app-main-model')
 
const render = () => {
    let appMainView = require('../views/app-main.html') 
           
    getFilmsList((data) => { // 获取了model的数据
        let template = Handlebars.compile(appMainView)
        $('#app #main').html(template({ films: data.movieList }))
    })
}

module.exports = { render }