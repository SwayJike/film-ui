const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'freemovie.ltd', // 允许访问的域名地址，即花生壳内网穿透的地址
      'jk.freemovie.ltd'  // .是二级域名的通配符
    ],
  },

})
