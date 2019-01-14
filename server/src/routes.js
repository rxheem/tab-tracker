var AuthenticationControllers = require('./controllers/AuthenticatorController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationControllers.register)
}
