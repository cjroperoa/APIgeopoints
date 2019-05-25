const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

//Register
users.post('/register', (req, res) => {
  const userData = {
    name : req.body.name,
    mail : req.body.mail,
    password : req.body.password,
  }

  User.findOne('/register:id', (req, res) => {
    where: {
      mail: req.body.mail
    }
  })
   .then(user => {
      if (!user) {
        const hash = bcrypt.hashSync(userData.password, 10)
        userData.password = hash
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 1440})
            res.json({ token: token })
          })
        .catch(err => {
          res.send(`error: {$err}`)
        })
      }else {
         res.json({ err: 'User already exists' })
      }
    })
    .catch(err => {
      res.send(`error: {$err}`)
    })
})
