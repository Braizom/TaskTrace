module.exports = app => {
    const element = require('../controllers/element.controller')
    const router = require('express').Router()

    router.get('/:id', element.findAll)
    router.post('/:id', element.create)
    router.put('/update/:id',element.update)
    router.delete("/delete/:id", element.delete)

    app.use('/api/element', router)
}