module.exports = (connex, Sequelize) => {
    let Element
    Element = connex.define('element', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return Element
}