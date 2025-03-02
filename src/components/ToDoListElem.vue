<template>
  <div class="w-full md:block md:w-auto mx-20">
    <ToDoListElemMenu/>
    <ul>
      <li>
        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 class="mb-5 text-lg font-medium text-gray-900">Oliver Twist, Charles Dickens</h3>
          <ul class="grid w-full gap-6 md:grid-cols-3">
            <li>
              <input type="radio" id="1" name="hosting" value="1" class="hidden peer">
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
