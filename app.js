const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const e = require("express")

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/check", (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const usersFilter = users.filter(user => user.email === email && user.password === password)
  const error = "帳號或密碼錯誤"
  console.log(usersFilter[0])

  if(usersFilter.length){
    res.render("check", { user: usersFilter[0] })
  }else {
    res.render("index", { error })
  }
})

app.listen(port, () => {
  console.log(`App is running on : http://localhost:${port}`)
})