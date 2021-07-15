const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', { //api1是需要轉發的請求(所有帶有/api1前綴的請求都會轉發給5000)
      target: 'http://localhost:5000', //配置轉發目標地址(能返回數據的服務器地址)
      //changeOrigin: true, //控制服務器接收到的請求頭中host字段的值
      /*
      changeOrigin設置為true時，服務器收到的請求頭中的host為：localhost:5000
      changeOrigin設置為false時，服務器收到的請求頭中的host為：localhost:3000
      changeOrigin默認值為false，但我們一般將changeOrigin值設為true
      */
      pathRewrite: {'^/api1': ''} //去除請求前綴，保證交給後台服務器的是正常請求地址(必須配置)
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}