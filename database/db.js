const Sequilize = require("sequelize");
const db = {}
const sequilize = new Sequilize("dev_geopoints", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequilize = sequilize;
db.Sequilize = Sequilize;

module.exports = db;