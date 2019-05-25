const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    loc_init: {
      type: Sequelize.GEOMETRY
    },
    loc_mark1: {
      type: Sequelize.GEOMETRY
    },
    loc_mark2: {
      type: Sequelize.GEOMETRY
    }
  }
)