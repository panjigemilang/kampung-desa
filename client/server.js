const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(proxy("/api/**", { target: "https://api-kampungdesa.herokuapp.com" }))
  app.use(
    proxy("/otherApi/**", { target: "https://api-kampungdesa.herokuapp.com" })
  )
}
