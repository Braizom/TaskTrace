<template>
  <div class="mx-44">
    <ToDoListMain/>
    <ul class="mt-5 mb-5 divide-y rounded-xl">
      <li>
        <details class="group">
          <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
              </path>
            </svg>
            English Books
          </summary>
          <ToDoListElem/>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoListMain from '@/components/ToDoListMain.vue'
import ToDoListElem from '@/components/ToDoListElem.vue'

export default {
  components: {
    ToDoListMain,
    ToDoListElem
  }
}
</script>
