var AuthenticationControllers = require('./controllers/AuthenticatorController')

module.exports = (app) => {
    app.post('/register', AuthenticationControllers.register)
}
