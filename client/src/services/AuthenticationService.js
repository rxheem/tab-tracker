import Api from '@/services/Api' 

export default {
    register(credentials){
        return Api().post('register', credentials)
    }
}

//  AuthenticationService.register({
//   email: 'rmcdonald@yahoo.com', 
//    password: '123456'
// })