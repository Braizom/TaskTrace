<template>
  <form class="flex w-1/3 gap-3 px-4 py-3 font-medium marker:content-none">
    <div class="flex justify-between w-full text-xl ms-8">
      <input v-model="list.name" type="text" id="listName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-3" required placeholder="List Name"/>
    </div>
    <button type="button" @click="createList(list)" class="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center">
      Save
    </button>
    <button type="button" @click="toggleListCreation" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center">
      Cancel
    </button>
  </form>
</template>

<script>
export default {
  props: ['toggleListCreation', 'createList'],
  data () {
    return {
      list: {
        name: '',
        elems: []
      }
    }
  }
}
</script>
