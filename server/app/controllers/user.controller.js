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
exports.create = (req, res) => {
    // console.log(req.body)
    if(!req.body.name){
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }
    User.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not insert the data'
            })
        })
}

// exports.findOne = (req, res) => {

// }

// exports.udpate = (req, res) => {

// }

// exports.delete = (req, res) => {

// }