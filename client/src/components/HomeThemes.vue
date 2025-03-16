<template>
  <div class="m-5">
    <h1 class="text-3xl font-semibold dark:text-white">Your Themes</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-5 p-10">
      <li v-if="themeCreation">
        <CreateTheme :toggleThemeCreation="toggleThemeCreation" :user="user" :addTheme="addTheme"/>
      </li>
      <li v-for="(theme, i) in themes" :key="i">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border dark:border-gray-600">
          <router-link :to="{ name:'todolist', params: { id: theme.id } }">
            <img class="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </router-link>
          <div class="p-5">
            <span class="flex justify-between">
              <router-link :to="{ name:'todolist', params: { id: theme.id } }">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ theme.name }}</h5>
              </router-link>
              <button type="button" @click="deleteTheme(i, theme.id)" class="text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center">
                Delete
              </button>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTheme from '@/components/CreateTheme.vue'
import ThemeDataService from '@/services/ThemeDataService'

export default {
  components: {
    CreateTheme
  },
  props: ['themes', 'themeCreation', 'toggleThemeCreation', 'user', 'addTheme', 'removeTheme'],
  methods: {
    deleteTheme (index, themeId) {
      ThemeDataService.delete(themeId)
        .then((response) => {
          this.removeTheme(index)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
