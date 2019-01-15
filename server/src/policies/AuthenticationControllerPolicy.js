const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email()
        }

        const {error, value} = Joi.validate(req.body, schema)

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'Try entering a valid email address'
                    })
                break
                default:
                    res.status(400).send({
                        error: 'We could not register you at this time. Please try again'
                    })
                    break
            }
        }
        else{
            next()
        }
    }
}