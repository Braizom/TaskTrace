module.exports = (connex, Sequelize) => {
    let Theme
    Theme = connex.define('theme', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return Theme
}