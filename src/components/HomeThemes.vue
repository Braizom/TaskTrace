<template>
  <div class="m-5">
    <h1 class="text-3xl font-semibold">Your Themes</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-5 p-10">
      <li>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
          <router-link to="/todolist">
            <img class="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
          </router-link>
          <div class="p-5">
            <router-link to="/todolist">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Books</h5>
            </router-link>
            <p class="mb-3 font-normal text-gray-700">You have 3 “Books” To-Do List</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
