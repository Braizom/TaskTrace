const user = require("../controllers/user.controller");
module.exports = app => {
    const theme = require('../controllers/theme.controller.js')
    const router = require('express').Router()

    router.get('/:id', theme.findAll)
    router.post('/:id', theme.create)
    router.put('/update/:id',theme.update)
    router.delete("/delete/:id", theme.delete)

    app.use('/api/theme', router)
}