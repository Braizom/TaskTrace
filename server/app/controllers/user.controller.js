const db = require('../models')
// const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = db.users
//const OP = db.Sequelize.Op
// const https = require('http')

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred'
            })
        })
}
exports.create = async (req, res) => {
    console.log('informations recu dans le backend :',req.body)
    try {
        const { username, email} = req.body;

        const existingUserByUsername = await User.findOne({ where: { username: username }});
        console.log(existingUserByUsername)
        if (existingUserByUsername) {
            return res.status(400).send({
                message: "Username already taken"
            });
        }

        const existingUserByEmail = await User.findOne({ where: { email: email }});
        console.log(existingUserByEmail)
        if (existingUserByEmail) {
            return res.status(400).send({
                message: "Email already in use"
            });
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = await User.create({ ...req.body, password: hashPassword });

        const token = jwt.sign({ id: newUser.id }, 'secret')
        await newUser.update({ token })
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.send({
            token: token,
            user: newUser
        })
    } catch (err) {
        res.status(500).send({
            message: 'Could not insert the data'
        })
    }
}

exports.findByUsername = (req, res) => {
    const username = req.body.username
    User.findOne({where: { username: username }})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found'
                })
            }
            res.send(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: 'Could not find the data'
            })
        })
}
exports.loginVerification = async (req, res) => {
    try {
        const {email} = req.body;
        const password1 = req.body.password;
        console.log(req.body, "dans loginVerification")

        const user = await User.findOne({where: {email: email}})
        if (!user) {
            return res.status(404).send({
                message: 'User not found'
            })
        }
        const verifyPassword = await bcrypt.compare(password1, user.password)
        if (!verifyPassword) {
            return res.status(400).send({
                message: 'Password Incorrect'
            })
        }
        const token = jwt.sign({id: user.id}, 'secret')
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        user.update({
            token: token
        })
        const {password, ...data} = await user.toJSON()
        res.send({
            token: token,
            user: data
        })
    } catch (err) {
        res.status(500).send({
            message: 'Could not find the data'
        })
    }
}

exports.auth = async (req, res) => {
    try {
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, 'secret')

        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const user = await User.findOne({where: claims.id})
        const {password, ...data} = await user.toJSON()
        res.send(data)

    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
}

exports.logout = async (req, res) => {
    try {
        // Récupérer l'utilisateur à partir du token
        const cookie = req.cookies['jwt']
        if (!cookie) {
            return res.status(401).send({ message: 'Not authenticated' })
        }

        const claims = jwt.verify(cookie, 'secret')
        if (!claims) {
            return res.status(401).send({ message: 'Invalid token' })
        }

        // Trouver l'utilisateur et supprimer son token en base de données
        await User.update({ token: null }, { where: { id: claims.id } })

        // Supprimer le cookie JWT
        res.cookie('jwt', '', { maxAge: 0 })

        res.status(200).send({ message: 'Logout successful' })
    } catch (error) {
        res.status(500).send({ message: 'Error logging out' })
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const cookie = req.cookies['jwt']
        if (!cookie) {
            return res.status(401).send({ message: 'Not authenticated' })
        }

        const claims = jwt.verify(cookie, 'secret')
        if (!claims) {
            return res.status(401).send({ message: 'Invalid token' })
        }
        await User.update({ token: null }, { where: { id: claims.id } })
        res.cookie('jwt', '', { maxAge: 0 })
        console.log(req.body,'ON EST BIEN DANS DELETEUSER DU BACKEND !!!')
        const { id } = req.params;
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            })
        }
        await user.destroy();
        res.send({ message: "User deleted successfully" })
    } catch (err) {
        res.status(500).send({
            message: "Could not delete the user"
        })
    }
}

// exports.udpate = (req, res) => {

// }

// exports.delete = (req, res) => {

// }