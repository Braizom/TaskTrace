<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold text-ttHeaderText sm:text-center">Settings</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto p-6">
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold">Change Password</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Member since 06 August 2020</p>
                    <button type="submit" class="w-1/2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 my-2">Save</button>
                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold">Appearance</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Switch between dark and light mode for a comfortable viewing experience.</p>
                    <div class="inline-flex rounded-md shadow-xs" role="group">
                    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white ">
                        Light theme
                    </button>
                    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white ">
                        Dark theme
                    </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-4 p-4 w-full">
                <span class="text-lg bg-gray-200 p-2 rounded-full">ℹ️</span>
                <div class="w-full">
                    <h3 class="font-semibold text-red-500">Delete Account</h3>
                    <p class="text-gray-500 text-sm md:text-base w-full">Permanently delete your account and all associated data. This action cannot be undone.</p>
                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="w-1/2 bg-red-500 text-white py-2 rounded-lg hover:bg-gray-800 my-2">Delete Account</button>
                    <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-600 bg-opacity-75">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow-sm">
                                <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete your account and all your data ?</h3>
                                    <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                        Yes, I'm sure
                                    </button>
                                    <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">No, cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
