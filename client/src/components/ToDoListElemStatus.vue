<template>
  <ul class="grid w-full gap-6 md:grid-cols-3">
    <li>
      <input type="radio" :id="list.toString() + elem.toString() + 1" :name=" list.toString() + elem.toString() " :value="list.toString() + elem.toString() + 1" class="hidden peer" checked>
      <label :for="list.toString() + elem.toString() + 1" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
        To Do
      </label>
    </li>
    <li>
      <input type="radio" :id="list.toString() + elem.toString() + 2" :name="list.toString() + elem.toString()" :value="list.toString() + elem.toString() + 2" class="hidden peer">
      <label :for="list.toString() + elem.toString() + 2" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
        Doing
      </label>
    </li>
    <li>
      <input type="radio" :id="list.toString() + elem.toString() + 3" :name="list.toString() + elem.toString()" :value="list.toString() + elem.toString() + 3" class="hidden peer">
      <label :for="list.toString() + elem.toString() + 3" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
        Done
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list', 'elem', 'status']
}
</script>
