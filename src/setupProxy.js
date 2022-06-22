// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     // createProxyMiddleware("/restaurant", {
//     createProxyMiddleware("/api/user/login", {
//       target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     // createProxyMiddleware("/restaurant", {
//     createProxyMiddleware("/api/notice/write", {
//       target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
//       changeOrigin: true,
//     })
//   );
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/user/login", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/user/info", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/user/signup", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice/write", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice/change/", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/notice/del/", {
      target: "http://idontcare.shop", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
