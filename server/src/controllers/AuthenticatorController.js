const {User} = require('../models')
 
module.exports = {
    async register (req, res){

        try{
            const user = await User.create(req.body)

            res.send(user.toJSON())
        }
        catch(err){
            // Email already exists
            res.status(400).send({
                error: 'This email address is already in use'
            })
        }
    }
}