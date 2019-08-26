const express = require("express")
const proxy = require("http-proxy-middleware")
const path = require("path")

const app = express()

module.exports = function(app) {
  app.use(proxy("/api/*", { target: "https://api-kampungdesa.herokuapp.com" }))
}

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  })
}
