<template>
  <div class="m-5">
    <h1 class="text-3xl font-semibold">Other lists</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 p-10">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        <router-link to="/todolist">
          <img class="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
        </router-link>
        <div class="p-5">
          <router-link to="/todolist">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Grocery List</h5>
          </router-link>
        </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        <router-link to="/todolist">
          <img class="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
        </router-link>
        <div class="p-5">
          <router-link to="/todolist">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Projects</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
