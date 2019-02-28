
const appMainView = require('../views/app-main.html') 
const appListController = require('./app-list-controller')
const render = async () => {
    // 渲染内容
    $('#app #main').html(appMainView)
    //  let dataList=await getZu()
    // //  console.log(dataList)
    // let template = Handlebars.compile(appMainView)
    // $('.main-wrapper .scroll-content').html(
        
    //    template({ films: handleListFormat(filmsList.movieList) })
    // )
    appListController.render();
}



module.exports = { render }