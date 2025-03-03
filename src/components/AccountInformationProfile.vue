<template>
    <div>
        <h1 class="text-2xl font-bold text-ttHeaderText sm:text-center">Account Information</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto p-6">
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold">Registration date</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Member since 06 August 2020</p>
                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold">Email</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">nanthushan.kesavan@efrei.net</p>
                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold">Statistics</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Track the number of To-Do Lists you’ve created.</p>
                    <button class="mt-2 bg-black text-white px-3 py-1 rounded">Click here</button>
                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold text-red-500">Delete all your Data</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">This will permanently delete all your themes and To-Do Lists.</p>
                    <button class="mt-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
