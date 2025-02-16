const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'https://www.everytrend.kr:8000/',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }))
}