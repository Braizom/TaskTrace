<template>
  <form class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mb-2">
    <div class="w-full flex flex-wrap justify-between items-center mb-2">
      <div>
        <label for="listName" class="block mb-2 text-sm font-medium text-gray-900">Element Name</label>
        <input type="text" id="listName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <button type="button" class="rtl:space-x-reverse text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center">
        Create Element
      </button>
    </div>
    <ul class="grid w-full gap-6 md:grid-cols-3">
      <li>
        <input type="radio" id="CreateDo" name="hosting" value="CreateDo" class="hidden peer" required>
        <label for="CreateDo" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
          To Do
        </label>
      </li>
      <li>
        <input type="radio" id="CreateDoing" name="hosting" value="CreateDoing" class="hidden peer">
        <label for="CreateDoing" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
          Doing
        </label>
      </li>
      <li>
        <input type="radio" id="CreateDone" name="hosting" value="CreateDone" class="hidden peer">
        <label for="CreateDone" class="text-lg font-semibold inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-600  peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 ">
          Done
        </label>
      </li>
    </ul>
  </form>
</template>
