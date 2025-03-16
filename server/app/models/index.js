const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: 3306,
    operatorAliases: false
})

const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.users = require('./user.model.js')(connex, Sequelize)
db.themes = require('./theme.model.js')(connex, Sequelize)
db.lists = require('./list.model.js')(connex, Sequelize)
db.elements = require('./element.model.js')(connex, Sequelize)

db.users.hasMany(db.themes)
db.themes.belongsTo(db.users)

db.themes.hasMany(db.lists)
db.lists.belongsTo(db.themes)

db.lists.hasMany(db.elements)
db.elements.belongsTo(db.lists)

module.exports = db
