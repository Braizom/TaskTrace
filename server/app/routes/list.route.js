module.exports = app => {
    const list = require('../controllers/list.controller')
    const router = require('express').Router()

    router.get('/:id', list.findAll)
    router.post('/:id', list.create)
    router.put('/update/:id',list.update)
    router.delete("/delete/:id", list.delete)

    app.use('/api/list', router)
}