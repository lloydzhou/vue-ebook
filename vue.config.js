module.exports = {
  //  设置打包后的css js引入路径  生产环境 为./  其他环境为/
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9099,
    https: false,
    hotOnly: false,
    proxy: {
      '/api/epub/moby-dick': {
        target: 'http://192.168.50.129:9099/epub/moby-dick.epub',
      },
      '/api': {
        target: 'https://strange.jianxun.io',
        changeOrigin: true
      },
    }, // 设置代理
    before: app => {}
  }
}
