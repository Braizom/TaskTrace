module.exports = (connex, Sequelize) => {
    let User;
    User = connex.define('user', {
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
            type: Sequelize.DATEONLY,
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
        connected: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};