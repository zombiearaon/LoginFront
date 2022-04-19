module.exports = {
    devServer:{
        proxy:{
            '/api': {
                //要访问的跨域的域名
                target: 'http://localhost:8080',
                ws: true,
                changOrigin: true,
                pathRewrite:{
                    '^/api' : ''
                }
            }
        }
    }
}