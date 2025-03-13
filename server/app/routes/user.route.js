module.exports = app => {
    const user = require('../controllers/user.controller.js')
    const router = require('express').Router()
    router.get('/', user.findAll)
    router.post('/', user.create)
    router.post('/login',user.loginVerification)
    router.get('/auth', user.auth)
    router.get('/logout', user.logout)
    router.delete("/delete/:id", user.deleteUser);
    app.use('/api/user', router)
}