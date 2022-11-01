const fs = require("fs")
const path = require("path")
const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let filepath = path.join(__dirname, "Home.html")
    fs.readFile(filepath, "utf8", (err, data) => {
      res.end(data)
    })
  }
  if (req.url === "/about") {
    let filepath = path.join(__dirname, "About.html")
    fs.readFile(filepath, "utf8", (err, data) => {
      res.end(data)
    })
  }
  if (req.url === "/contact") {
    let filepath = path.join(__dirname, "Contact.html")
    fs.readFile(filepath, "utf8", (err, data) => {
      res.end(data)
    })
  }
})
const port = 4004

server.listen(port, () => {
  console.log(`listening on port ${port}`)
})
