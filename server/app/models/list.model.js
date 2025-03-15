module.exports = (connex, Sequelize) => {
    let List
    List = connex.define('list', {
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

    return List
}