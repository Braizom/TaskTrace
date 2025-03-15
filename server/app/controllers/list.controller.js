const db = require('../models')
const List = db.lists

exports.findAll = (req, res) => {
    List.findAll({ where: { themeId: req.params.id } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not find lists'
            })
        })
}

exports.create = (req, res) => {
    List.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not create list'
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    List.update(req.body, { where: { id: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'List updated successfully'
                })
            }
            else{
                res.send({
                    message: 'List not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not update list'
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    List.destroy({ where: { id: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'List deleted successfully'
                })
            }
            else{
                res.send({
                    message: 'List not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete list'
            })
        })
}
