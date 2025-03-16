<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border dark:border-gray-600">
    <form class="rounded-t-lg">
      <div class="bg-gray-100 dark:bg-gray-500 rounded-t-lg">
        <div class="h-64 w-64 flex ms-11">
          <svg class="bg-gray-100 dark:bg-gray-500 rounded-2xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <input
            class="cursor-pointer absolute block h-64 w-64 opacity-0 pin-r pin-t"
            type="file"
            name="documents[]"
            accept="image/*" required>
        </div>
      </div>
      <div class="p-5">
        <input v-model="theme.name" type="text" id="themeName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Theme Name"/>
        <button type="button" @click="newTheme(toggleThemeCreation)" class="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center inline-flex items-center">
          Save
        </button>
        <button type="button" @click="toggleThemeCreation" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center inline-flex items-center">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ThemeDataService from '@/services/ThemeDataService'

export default {
  props: ['toggleThemeCreation', 'addTheme', 'user'],
  data () {
    return {
      theme: {
        name: ''
      }
    }
  },
  methods: {
    newTheme (toggleThemeCreation) {
      if (this.theme.name === '') {
        return
      }
      this.theme.userId = this.user.id
      ThemeDataService.create(this.user.id, this.theme)
        .then((response) => {
          const theme = response.data
          theme.lists = []
          this.addTheme(theme, toggleThemeCreation)
        })
        .catch((error) => {
          console.log('FUCK: ' + error.message)
        })
    }
  }
}
</script>
