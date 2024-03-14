const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    // host:'127.0.0.1',
    // port:'3333',
  //   devServer: {
  //     open: false, // 自动打开浏览器
  //     port: 8081,
  // },
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://127.0.0.1:3001/', //这里填写项目真实的后台接口地址
        changOrigin: true, //设置允许跨域
        pathRewrite: {//这个重写不可省略！因为我们真正请求的地址并不含 /api
          '^/api': ''
        }
      }
    }
  }
})