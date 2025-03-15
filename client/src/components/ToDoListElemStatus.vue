<template>
  <ul class="grid w-full gap-6 md:grid-cols-3">
    <li>
      <input type="radio" :id="listId.toString() + elemId.toString() + 1" :name=" listId.toString() + elemId.toString() " value="To Do" class="hidden peer" :checked="status === 'To Do'">
      <label :for="listId.toString() + elemId.toString() + 1" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
        To Do
      </label>
    </li>
    <li>
      <input type="radio" :id="listId.toString() + elemId.toString() + 2" :name="listId.toString() + elemId.toString()" value="Doing" class="hidden peer" :checked="status === 'Doing'">
      <label :for="listId.toString() + elemId.toString() + 2" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
        Doing
      </label>
    </li>
    <li>
      <input type="radio" :id="listId.toString() + elemId.toString() + 3" :name="listId.toString() + elemId.toString()" value="Done" class="hidden peer" :checked="status === 'Done'">
      <label :for="listId.toString() + elemId.toString() + 3" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
        Done
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['listId', 'elemId', 'status', 'elem'],
  data () {
    return {
      newStatus: this.status
    }
  }
}
</script>
