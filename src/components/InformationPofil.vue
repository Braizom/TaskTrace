<template>
    <div class="max-w-sm mx-auto my-10">
        <h1 class="flex items-center text-5xl font-extrabold">ABDELKRIM
            <span class="font-semibold me-2 px-2.5 py-0.5 rounded-sm ms-2">
                <img class="w-20 h-20 rounded-full" src="@/assets/kermit.jpeg" alt="Rounded avatar">
            </span>
        </h1>
    </div>
    <form class="max-w-sm mx-auto border border-gray-300 rounded-lg p-6 shadow-md my-10">
        <div class="mb-5">
            <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Firstname</label>
            <input type="text" id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nanthushan">
        </div>
        <div class="mb-5">
            <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Lastname</label>
            <input type="text" id="lastname" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kesavan">
        </div>
        <div class="mb-5">
            <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date of Birth</label>
            <input type="date" id="dob" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value="2003-06-08">
        </div>
        <div class="mb-5">
            <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Bio</label>
            <input type="text" id="bio" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Organized. Focused. Productive.">
        </div>
        <button type="submit" class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Save</button>
    </form>
</template>
