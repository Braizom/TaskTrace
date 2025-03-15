const db = require('../models')
const Element = db.elements

exports.findAll = (req, res) => {
    Element.findAll({ where: { themeId: req.params.id } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not find elements'
            })
        })
}

exports.create = (req, res) => {
    Element.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not create element'
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Element.update(req.body, { where: { id: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'Element updated successfully'
                })
            }
            else{
                res.send({
                    message: 'Element not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not update element'
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Element.destroy({ where: { id: id } })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: 'Element deleted successfully'
                })
            }
            else{
                res.send({
                    message: 'Element not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete element'
            })
        })
}
