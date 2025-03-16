module.exports = app => {
    const theme = require('../controllers/theme.controller.js')
    const router = require('express').Router()

    router.get('/:id', theme.findAll)
    router.post('/:id', theme.create)
    router.put('/update/:id',theme.update)
    router.delete("/delete/:id", theme.delete)
    router.delete("/deleteAll/:id", theme.deleteAll)

    app.use('/api/theme', router)
}