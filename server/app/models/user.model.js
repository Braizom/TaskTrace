module.exports = (connex, Sequelize) => {
    let User;
    User = connex.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        birthdate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        biography: {
            type: Sequelize.STRING,
            allowNull: true
        },
        token: {
            type: Sequelize.STRING
        },
        theme: {
            type: Sequelize.STRING
        }
    });
    return User;
};