const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = db.users

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
    try {
        const { username, email} = req.body;

        const existingUserByUsername = await User.findOne({ where: { username: username }});
        if (existingUserByUsername) {
            return res.status(400).send({
                message: "Username already taken"
            });
        }

        const existingUserByEmail = await User.findOne({ where: { email: email }});
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
            res.status(500).send({
                message: 'Could not find the data'
            })
        })
}

exports.loginVerification = async (req, res) => {
    try {
        const {email} = req.body;
        const password1 = req.body.password;

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

exports.updateUser = async (req, res) => {
    try{
        const {id} = req.params
        const updateData = req.body
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }
        await user.update(updateData);
        res.send({ message: "User updated successfully", user })
    } catch (err) {
        res.status(500).send({ message: "Could not update the user" })
    }
}

exports.changePassword = async (req, res) => {
    try {
        const { id } = req.params
        const { actualPassword, newPassword, confirmPassword } = req.body
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(actualPassword, user.password)
        if (!isMatch) {
            return res.status(400).send({ message: "Incorrect actual password" })
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).send({ message: "New passwords do not match" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await user.update({ password: hashedPassword });
        res.send({ message: "Password updated successfully" });
    } catch (err) {
        res.status(500).send({ message: "Could not update the password" });
    }
};