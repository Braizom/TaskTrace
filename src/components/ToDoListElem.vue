<template>
  <div class="w-full md:block md:w-auto mx-20">
    <ToDoListElemMenu/>
    <ul>
      <li>
        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm my-2">
          <div class="w-full flex flex-wrap justify-between items-center mb-2">
            <h3 class="text-lg font-medium text-gray-900">Oliver Twist, Charles Dickens</h3>
            <button type="button" class="rtl:space-x-reverse text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center">
              <svg class="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#ffffff"></path>
              </svg>
              Delete Element
            </button>
          </div>
          <ul class="grid w-full gap-6 md:grid-cols-3">
            <li>
              <input type="radio" id="1" name="hosting" value="1" class="hidden peer" checked>
              <label for="1" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
                To Do
              </label>
            </li>
            <li>
              <input type="radio" id="2" name="hosting" value="2" class="hidden peer">
              <label for="2" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
                Doing
              </label>
            </li>
            <li>
              <input type="radio" id="3" name="hosting" value="3" class="hidden peer">
              <label for="3" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
                Done
              </label>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoListElemMenu from '@/components/ToDoListElemMenu.vue'

export default {
  components: {
    ToDoListElemMenu
  }
}
</script>
