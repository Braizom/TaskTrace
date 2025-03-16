<template>
  <nav class="bg-ttHeaderBg border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <router-link to="/">
          <span class="text-ttHeaderText self-center text-5xl font-semibold whitespace-nowrap dark:text-white">TaskTrack</span>
        </router-link>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div v-if="user && Object.keys(user).length > 0"  class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center">
          <li >
            <router-link to="/home" class="bg-ttHeaderBtn py-1 px-1 text-ttHeaderText rounded-md  hover:bg-black hover:text-white dark:bg-gray-600 dark:text-white">Home</router-link>
          </li>
          <li >
            <router-link to="/profile" class="bg-ttHeaderBtn block py-1 px-1 text-ttHeaderText rounded-md md:border-0  hover:bg-black hover:text-white dark:bg-gray-600 dark:text-white">Profile</router-link>
          </li>
          <li >
            <router-link  to="/parameters" class="bg-ttHeaderBtn block py-1 px-1 text-ttHeaderText rounded-md md:border-0 hover:bg-black hover:text-white dark:bg-gray-600 dark:text-white">Parameters</router-link>
          </li>
          <li >
            <button @click="logout" class="bg-black text-white px-3 py-1 rounded-md hover:bg-red-200 hover:text-black dark:bg-gray-200 dark:text-gray-900">Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import UserDataService from '@/services/UserDataService'
export default {
  props: ['user'],
  methods: {
    logout () {
      console.log('juste avant de deco', this.user)
      UserDataService.logout()
        .then(response => {
          console.log(response)
          localStorage.removeItem('token')
          this.$store.dispatch('user', null)
          this.$router.push('/')
          this.$emit('update-user', {})
          this.$emit('update-connected', false)
        })
        .catch(error => {
          console.log(error, 'lors de la deconnexion')
        })
    }
  }
}
</script>
