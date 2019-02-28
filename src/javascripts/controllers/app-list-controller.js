
const appListView = require('../views/app-list.html') 

const {getZu,getZiRu,getIndex} = require('../models/app-index-model')

const render = async () => {
    
    
    // let template = Handlebars.compile(appListView)
    // let zuList = await getZu()

   
    // $('.scroll-content ul').html(template(zuList.data))
  
    // console.log(zuList.data.rooms)


   

     let zuList = await getZu() //接口数据
     let template = Handlebars.compile(appListView)
     let roomsList=zuList.data.rooms
     $('.scroll-content ul').html(
        //  template({rooms: handleListFormat(zuList.data) })

        template(zuList.data)
        
       
     )
    
    //  console.log(zuList.data.rooms)
    //  zuList.data.rooms.forEach(element => {
    //      console.log(element.intro_list)
    //  });

    // renderZiru()
    // appIndex.render()

    renderZuls()
    
}

// async function renderZiru () {
   
    // let indexList = await getZiRu()
    // console.log(indexList)
    // console.log("aaa")

// }


async function renderZuls () {
    let zuls = await getIndex()//mock index假数据
    console.log(zuls)
     
}

//  


function handleListFormat (items) {
   items.forEach(element  => {
         if ( element.tags) {
              element.tags.forEach(item => {
               if(item.bg_img){
                item.bg_img.bgimg='<img src="${element.tags.bg_img}" alt="" class="samll-img">'
               }
})
         }
//         } else {
            
// //             if ( item.preShow ) {
// //                 item.situation = `<span>${item.wish}</span>人想看`
// //             } else {
// //                 item.situation = `暂无评分`
// //             }
// //         }
// //         item.img = item.img.replace(/\/w.h\//g, '/128.180/')  
     })
    return items
 }



module.exports = { render }