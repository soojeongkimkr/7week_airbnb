// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     // createProxyMiddleware("/restaurant", {
//     createProxyMiddleware("/api/user/login", {
//       target: "http://", //접속하려는 서버의 루트 URL
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     // createProxyMiddleware("/restaurant", {
//     createProxyMiddleware("/api/notice/write", {
//       target: "http://", //접속하려는 서버의 루트 URL
//       changeOrigin: true,
//     })
//   );
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/user/login", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/user/info", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/user/signup", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice/write", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice/change/", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice/del/", {
      target: "", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};