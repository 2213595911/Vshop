const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/styles/variable.scss')],
    },
  },
  // 跨域
  devServer: {
    proxy: {
      '/api': {
        // 匹配所有以 './api'开头的请求路径
        target: 'http://api.tbk.dingdanxia.com/spk/cate?apikey=ROQZ7Qrlt9xD6CcUvGar6YslDccSZ1OC&tree=true',
        ws: true, //用于支持websocket
        changeOrigin: true, //用户控制请求头里面的host值
      },
    },
  },
}
