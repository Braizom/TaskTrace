const db = require('../models')
const User  = db.users

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured'
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
        const newUser = await User.create(req.body);
        res.send(newUser);

    } catch (err) {
        res.status(500).send({
            message: 'Could not insert the data'
        });
    }
};

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
exports.findByEmail = (req, res) => {
    const email = req.body.email
    User.findOne({where: { email: email }})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'email not found'
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

// exports.udpate = (req, res) => {

// }

// exports.delete = (req, res) => {

// }