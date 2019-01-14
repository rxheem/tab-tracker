

<template>
  <div>
    <h1>Register</h1>

    <input type="email" 
      name="email" 
      id="email" 
      v-model="email"
      placeholder="Enter email here"
    />

    <input 
      type="password" 
      name="password" 
      v-model="password"
      id="password"
      placeholder="Enter password"
     />
    <button type="submit" @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '', 
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  }
}
</script>

