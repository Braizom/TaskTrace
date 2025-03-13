<template>
  <div class="m-5">
    <h1 class="text-3xl font-semibold">Home</h1>
    <p class="m-4">Manage your tasks easily with TaskTrack.</p>
    <div class="w-full md:block md:w-auto">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <button type="button" @click="toggleThemeCreation" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center">
            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
            Create a Theme
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleThemeCreation']
}
</script>
