<template>
  <section class="m-10 bg-transparent">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div class="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="handleLogin">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@concordia.ca" required="">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" v-model="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-sm font-medium text-gray-900 hover:underline dark:text-gray-300">Forgot password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800">Sign in</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <router-link to="/register" class="font-medium text-primary-600 hover:underline">Sign up</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserDataService from '@/services/UserDataService'
export default {
  props: ['user'],
  data () {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    handleLogin () {
      const logInfo = {
        email: this.email,
        password: this.password
      }
      UserDataService.loginVerification(logInfo)
        .then((response) => {
          console.log(response, 'je suis dans loginform le handlelogin')
          this.message = null
          this.$emit('update-connected', true)
          this.$router.push('/home')
          this.$store.dispatch('user', response.data.user)
          this.$emit('update-user', response.data)
          // console.log('Logging in with:', this.email, this.password)
        })
        .catch((e) => {
          this.message = e.response.data.message
          alert(this.message)
        })
    }
  }
}
</script>
