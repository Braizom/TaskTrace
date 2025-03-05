<template>
  <div>
    <footer class="relative bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="text-sm text-ttHeaderText sm:text-center">© 2025 TaskTrack™. All Rights Reserved.
        </span>
        </div>
        <button data-collapse-toggle="footer-nav" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="footer-nav" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="footer-nav">
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-ttHeaderText sm:mt-0">
            <li>
              <p class="me-4 md:me-6">About</p>
            </li>
            <li>
              <p class="me-4 md:me-6">Privacy Policy</p>
            </li>
            <li>
              <p class="me-4 md:me-6">Licensing</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>
