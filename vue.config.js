// vue.config.js
const vueConfig = {
  lintOnSave: false,
  publicPath: "./",
  assetsDir: "static",
  outputDir: "dist",
  devServer: {
    // development server port 8000
    port: 8081,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      // "/imageorgtowhite": {
      //   target: "http://8.142.74.18:6084",
      //   // target: "http://8.142.74.18:30080",
      //   ws: false,
      //   changeOrigin: true,
      //   // changeOrigin: true,
      //   // pathRewrite: { "^": "" },
      // },
      // "/oauth": {
      //   target: "https://aip.baidubce.com",
      //   // target: "http://8.142.74.18:30080",
      //   ws: false,
      //   changeOrigin: true,
      //   // changeOrigin: true,
      //   // pathRewrite: { "^": "" },
      // },
      "/api/core/auth": {
        target: "http://strong.xinagri.com:30080",
        changeOrigin: true,
        pathRewrite: { "^": "" },
      },
      // "/api/core/structure": {
      //   target: "http://strong.xinagri.com:30080",
      //   changeOrigin: true,
      //   pathRewrite: { "^": "" },
      // },
      // "/api/form": {
      //   target: "http://strong.xinagri.com:30080",
      //   changeOrigin: true,
      //   pathRewrite: { "^": "" },
      // },
      // "/api/strong": {
      //   target: "http://strong.xinagri.com:30080",
      //   changeOrigin: true,
      //   pathRewrite: { "^": "" },
      // },
      // "/admin/": {
      //   target: "http://8.142.74.18:8901",
      //   // target: 'http://localhost:8086',
      //   ws: false,
      //   changeOrigin: true,
      // },
    },
  },
};

module.exports = vueConfig;
