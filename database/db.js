const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("dev_geopoints", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// sequelize.authenticate()
//   .then(() => {
//     console.log('Conectado')
//   })
//   .catch(err => {
//     console.log('No se conecto')
//   })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db