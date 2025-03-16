const db = require('../models')
const Theme = db.themes

exports.findAll = (req, res) => {
    Theme.findAll({ where: { userId: req.params.id } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Something went wrong'
            })
        })
}

exports.create = (req, res) => {
    Theme.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not create theme'
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Theme.update(req.body, { where: { id: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'Theme updated successfully'
                })
            }
            else{
                res.send({
                    message: 'Theme not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not update theme'
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Theme.destroy({ where: { id: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'Theme deleted successfully'
                })
            }
            else{
                res.send({
                    message: 'Theme not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete theme'
            })
        })
}

exports.deleteAll = (req, res) => {
    const id = req.params.id

    Theme.destroy({ where: { userId: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'All contents deleted successfully'
                })
            }
            else{
                res.send({
                    message: 'Nothing to delete'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete contents'
            })
        })
}
