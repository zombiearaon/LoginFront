module.exports = {
    devServer:{
        port:7000,
        proxy:{
            '/api': {
                //要访问的跨域的域名
                target: 'http://127.0.0.1:8080',
                ws: true,
                changOrigin: true,
                pathRewrite:{
                    '^api':''
                }
            }
        }
    }
}