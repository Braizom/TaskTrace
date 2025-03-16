<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import UserDataService from '@/services/UserDataService'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold text-ttHeaderText sm:text-center dark:text-white">Settings</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto p-6">
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full dark:bg-gray-600">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold dark:text-white">Change Password</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Change your password</p>
                  <!-- Modal toggle -->
                  <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Change
                  </button>

                  <!-- Main modal -->
                  <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-600 bg-opacity-75">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                      <!-- Modal content -->
                      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Change your Password
                          </h3>
                          <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-4 md:p-5">
                          <form class="space-y-4" action="#">
                            <div>
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your actual password</label>
                              <input v-model="passwords.actualPassword" type="password" name="password" id="password1" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your new password</label>
                              <input v-model="passwords.newPassword" type="password" name="password" id="password2" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                              <input v-model="passwords.confirmPassword" type="password" name="password" id="password3" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="changePassword">Confirm</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full dark:bg-gray-600">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold dark:text-white">Appearance</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Switch between dark and light mode for a comfortable viewing experience.</p>
                    <div class="inline-flex rounded-md shadow-xs">
                    <button @click="toggleStyle('')" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900">
                        Light theme
                    </button>
                    <button @click="toggleStyle('dark')" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900">
                        Dark theme
                    </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full dark:bg-gray-600">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold text-red-500">Delete Account</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Permanently delete your account and all associated data. This action cannot be undone.</p>
                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="w-1/2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 my-2">Delete Account</button>
                    <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-600 bg-opacity-75">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-white">Are you sure you want to delete your account and all your data ?</h3>
                                    <button @click="deleteAccount" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                        Yes, I'm sure
                                    </button>
                                    <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100">No, cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['user', 'toggleStyle'],
  data () {
    return {
      passwords: { actualPassword: '', newPassword: '', confirmPassword: '' }
    }
  },
  methods: {
    async deleteAccount () {
      try {
        console.log('dans la fonction deleteAccount, voici this.user : ', this.user)
        const response = await UserDataService.deleteUser(this.user.id)
        console.log(response)
        this.$emit('update-user', {})
        alert('Account deleted successfully.')
        this.$router.push('/')
      } catch (error) {
        console.error('Error deleting account:', error)
        alert('An error occurred while deleting the account.')
      }
    },
    changePassword () {
      UserDataService.changePassword(this.user.id, this.passwords)
        .then(response => {
          console.log('Password changed successfully:', response.data)
          alert('Password updated successfully.')
        })
        .catch(error => {
          console.error('Error changing password:', error.response.data.message)
          alert(error.response.data.message)
          // alert('An error occurred while updating the password.')
        })
      console.log('actual password : ', this.passwords.actualPassword)
      console.log('new password : ', this.passwords.newPassword)
    }
  }
}
</script>
