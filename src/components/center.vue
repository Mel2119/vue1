<script setup>
  
  import {RouterLink} from 'vue-router'
  import {ref} from 'vue'
  var keyword=ref("")
  var RH=ref("/Searchresult/" +keyword)
</script>
<template>
    <div class="flex  justify-center mt-24">
       <img src="../assets/googl.png" class="" alt="Google Search" >
    </div>
    <div class="flex w-full-40 rounded-xl bg-white-100 px-3 py-2 justify-center shadow-md border ml-80 mr-44">
        <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path></svg>
    <input type="text" v-model="keyword" class="flex-grow outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md pl-2 flex justify-cneter" placeholder="Search here..." />
  </div>
  <div class="flex flex-row space-x-44 items-center">
    <RouterLink :to="`/Searchresult/ ${keyword}`"><button class="bg-blue-300 shadow-md h-10 rounded-lg flex ml-96 mt-10 w-28 pl-1 items-center">Google search</button></RouterLink>
   <button class="bg-blue-300 shadow-md h-10 rounded-lg flex ml-96 mt-10 w-32 pl-1  items-center">I'm feeling lucky</button>
  </div>
  <p class="ml-96 mt-8">Google offered in <span class="text-red-600">Amharic</span> <span class="text-blue-600">Afannn orommo</span> <span class="text-green-600">Somalia</span></p>
  
</template>

<style>
  
</style>