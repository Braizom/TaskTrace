<template>
  <div class="mx-44">
    <ToDoListMain :theme="theme" :toggleListCreation="toggleListCreation"/>
    <ul class="mt-5 mb-5 divide-y rounded-xl">
      <li v-if="listCreation">
        <CreateList :toggleListCreation="toggleListCreation"/>
      </li>
      <li v-for="(list, i) in theme.lists" :key="i">
        <details class="group">
          <summary class="w-full flex justify-between gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <span class="flex text-xl items-center">
              <svg class="w-6 h-6 me-2 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                   width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
              {{ list.name }}
            </span>
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center">
              Delete ToDo List
              <svg class="w-5 h-5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.7427 8.46448L19.1569 9.87869L17.0356 12L19.157 14.1214L17.7428 15.5356L15.6214 13.4142L13.5 15.5355L12.0858 14.1213L14.2072 12L12.0859 9.87878L13.5002 8.46457L15.6214 10.5858L17.7427 8.46448Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58579 19L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.58579 5H22.5857V19H8.58579ZM9.41421 7L4.41421 12L9.41421 17H20.5857V7H9.41421Z" fill="#ffffff"></path>
              </svg>
            </button>
          </summary>
          <ToDoListElem :list="list" :listId="i"/>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoListMain from '@/components/ToDoListMain.vue'
import ToDoListElem from '@/components/ToDoListElem.vue'
import CreateList from '@/components/CreateList.vue'

export default {
  components: {
    CreateList,
    ToDoListMain,
    ToDoListElem
  },
  props: ['themes'],
  computed: {
    theme () {
      const theme = this.themes.find((p) => {
        return p.id === Number(this.$route.params.id)
      })
      console.log(theme.lists.length)
      return theme
    }
  },
  data () {
    return {
      listCreation: false
    }
  },
  methods: {
    toggleListCreation () {
      this.listCreation = !this.listCreation
    }
  }
}
</script>
