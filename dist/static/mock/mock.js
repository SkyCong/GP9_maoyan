
module.exports = () => { 
    return {
        a: require('./a.json'),//   /a
        b: require('./b.json'),//   /b
        banner: require('./banner.json'),
        ziru:require('./ziru.json'),
        index:require('./index.json')
    }
}


// /a/aa -> /a