<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>
<template>
    <div class="max-w-sm mx-auto my-10">
        <h1 class="flex items-center text-5xl font-extrabold"> {{user.username}}
            <span class="font-semibold me-2 px-2.5 py-0.5 rounded-sm ms-2">
                <img class="w-20 h-20 rounded-full" src="@/assets/kermit.jpeg" alt="Rounded avatar">
            </span>
        </h1>
    </div>
    <form class="max-w-sm mx-auto border border-gray-300 rounded-lg p-6 shadow-md my-10">
        <div class="mb-5">
            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Firstname</label>
            <input type="text" id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="updateUser.firstname" >
        </div>
        <div class="mb-5">
            <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Lastname</label>
            <input type="text" id="lastname" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="updateUser.lastname" >
        </div>
        <div class="mb-5">
            <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date of Birth</label>
            <input type="date" id="dob" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="updateUser.birthdate">
        </div>
        <div class="mb-5">
            <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bio</label>
            <input type="text" id="bio" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="updateUser.biography">
        </div>
      <!-- Modal toggle -->
      <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800" type="button">
        Save Modification
      </button>
      <!-- Main modal -->
      <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Save Modification
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-white" >
                Are you sure to save these modification ?
              </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="updateUserData"> Save </button>
              <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </form>
</template>

<script>

export default {
  props: ['user'],
  emits: ['updateUser'],
  data () {
    return {
      updateUser: { ...this.user }
    }
  },
  methods: {
    updateUserData () {
      console.log('this.user : ', this.user)
      console.log('updateUser : ', this.updateUser)
      this.$emit('updateUser', this.updateUser)
    }
  }
}
</script>
