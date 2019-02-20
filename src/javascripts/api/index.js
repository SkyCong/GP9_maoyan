// 封装api是为了统一处理跨域路径 还有 对请求回来的数据的处理
const api = {
    request ({
        url, data, methods, success
    }) {
        $.ajax({
            // url: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',
            url: '/maoyan' + url,
            data: data || {},
            methods: methods || 'get',
            success: (res) => {
                success(res) 
            },
            error: (error) => {
                console.log('请求出错了', error)
            }
        }) 
    }
}

module.exports = api