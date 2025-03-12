<template>
  <div class="m-5">
    <h1 class="text-3xl font-semibold">Your Themes</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-5 p-10">
      <li v-if="themeCreation">
        <CreateTheme :toggleThemeCreation="toggleThemeCreation" :createTheme="createTheme" />
      </li>
      <li v-for="(theme, i) in themes" :key="i">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
          <router-link :to="{ name:'todolist', params: { id: theme.id } }">
            <img class="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </router-link>
          <div class="p-5">
            <span class="flex justify-between">
              <router-link :to="{ name:'todolist', params: { id: theme.id } }">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ theme.name }}</h5>
              </router-link>
              <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center">
                Delete
              </button>
            </span>
            <p class="mb-3 font-normal text-gray-700">You have {{ (theme.lists).length }} “{{ theme.name }}” To-Do List</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTheme from '@/components/CreateTheme.vue'

export default {
  components: {
    CreateTheme
  },
  props: ['themes', 'themeCreation', 'toggleThemeCreation', 'createTheme']
}
</script>
