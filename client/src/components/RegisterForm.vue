<template>
  <div class="m-10">
  <section class="bg-white">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="handleRegister">
            <div>
              <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
              <input type="text" id="firstname" v-model="user.firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
            </div>
            <div>
              <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
              <input type="text" id="lastname" v-model="user.lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
            </div>
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input type="text" id="username" v-model="user.username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John93" required>
            </div>
            <div>
              <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
              <input type="date" id="dob" v-model="user.birthdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" v-model="user.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@concordia.ca" required="">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" v-model="user.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
              <input type="password" name="confirm-password" id="confirm-password" v-model="user.confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
              </div>
            </div>
            <button @click="saveUser" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <router-link to="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import UserDataService from '@/services/UserDataService'
export default {
  props: {
    connected: Boolean
  },
  data () {
    return {
      message: null,
      user: {
        firstname: '',
        lastname: '',
        username: '',
        birthdate: '',
        email: '',
        password: '',
        biography: '',
        connected: false,
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleRegister () {
    },
    saveUser () {
      if (this.user.password !== this.user.confirmPassword) {
        alert('Passwords do not match.')
        return
      }
      const { confirmPassword, ...userData } = this.user
      UserDataService.create(userData)
        .then((response) => {
          console.log(response, userData)
          this.message = null
          this.$emit('update-connected', true)
          this.$router.push('/home')
        })
        .catch((e) => {
          this.message = e.response.data.message
          alert(this.message)
        })
    }
  }
}
</script>
