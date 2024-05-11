<template>
  
  <div class="container ml-6 items-center flex flex-row space-x-8">
    <div class="w-36">
      <img src="../assets/googl.png" alt="">
    </div>
    <form class="w-screen">
      <input type="text" class="w-96 h-9 px-2 py-2 rounded-full shadow-lg border border-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="{keyword}">     
    </form>
    <div class="flex flex-row-reverse space-x-8 space-x-reverse relative h-8 w-32">
      <button type="submit" class="mr-0  px-2 py-0.5 text-white bg-blue-500 rounded-md hover:bg-blue-700">Signin</button>
      <a href="#" class="mr-0 ">setting</a>
      <a href="#" class="mr-0">menu</a>
    </div>
  </div>
  <div class=" w-full h-8 bg-white shadow-md  ">
    <ul class="items-center flex flex-row-center justify-center space-x-8">
      <li>All</li>
      <li>Images</li>
      <li>Maps</li>
      <li>Videos</li>
      <li>News</li>
      <li>:more</li>
    </ul>
    <div class="items-center w-screen">
      <p class="text-gray-400 mt-8 w-96 ml-24">About 3,970,000 results(0.44econds)</p>
        <p class=" text-black w-96 ml-24 mt-4" >https://en.wikipedia.org <span class="text-gray-300"> >wiki >bahir dar</span></p>
        <h4 class="text-blue-500 ml-24 mt-2">Bahirdar Wikipedia</h4>
        <p class="ml-24 w-96 text-gray-600 text-sm mt-2"> <span class="text-black">Bahirdar</span> is the capacity of Amhara region,Ethiopia.<span class="text-black">Bahirdar</span> is one of the leading destinations in Ethiopia,with a variety of attractins in...
        </p>
        <h6 class="text-gray-700 mt-2"><span class="text-gray-400 ml-24 mt-4 text-sm">Zone: </span>Bahirdar special zone</h6>
        <h6 class="text-gray-700 mt-1"><span class="text-gray-400 ml-24 mt-4 text-sm">Country: </span>Ethiopia</h6>
        <h6 class="text-blue-700 mb-6"><span class="text-blue-700 ml-24 mt-4 text-sm ">History- </span>Geography-<span class="text-blue-800">Education</span></h6>
         <p class="ml-24 text-black leading-3">People also ask :</p>
         <hr class="w-96 ml-24 mb-4 mt-6">
         <p class="ml-24 text-black leading-3">What is Bahirdar known for?</p>
         <hr class="w-96 ml-24 mb-4 mt-6">
         <p class="ml-24 text-black leading-3">What country is Bahirdar?</p>
         <hr class="w-96 ml-24 mb-4 mt-6">
         <p class="ml-24 text-black leading-3">Which country is beautiful in Ethiopia?</p>
         <hr class="w-96 ml-24 mb-4 mt-6">
         <p class="ml-24 text-black leading-3">What is the name of Bahirdar Airport?</p>
         <div class="flex flex-row"><hr class="w-96 ml-24 mb-4 mt-4"><span class="mb-0 text-gray-600 text-sm ">Feed back</span></div>
         <div class="container">
          <p class="ml-24 mb-8">Images for Bahirdar:</p>
          <div class="flex flex-row w-36 ml-24 space-x-1 ">
               <img src="../assets/bahirda1.jpg" class="rounded-l-lg" alt="">
               <img src="../assets/bahirdar2.jpg" alt="">
               <img src="../assets/bahirdar3.jpg" alt="">
               <img src="../assets/bahirdar4.jpg" class="rounded-r-lg" alt="">       
          </div>
          <hr class="w-full text-black ml-24 mb-4 mt-6">
         </div>
    </div>
  </div>
  <section class="aside sticky  left-3/4 right-0  mt-16 mb-40 mr-8 w-80 h-screen bg-white shadow-none border">
    <div class="flex flex-row  pr-0">  
      <div class="flex-none w-40 h-32 rounded-l-lg...">  
        <img src="../assets/bahirda1.jpg"  class="rounded-l-lg h-32">
      </div>
      <div class="flex-none w-40 h-32 rounded-l-lg..."> 
         <img src="../assets/bahirdar2.jpg" class="rounded-r-lg h-32">
      </div>
      
    </div>
    <h2 class="text-black pl-4 font-semibold text-xl mb-1">Bahir Dar</h2>
     <h6 class="text-gray-500 pl-4 text-sm">City in Ethiopa</h6>
     <hr>
     <p class="text-sm text-gray-500 leading-4 pl-2 pt-4 pb-4 ">Bahir Dar rests on the shores of Lake Tana, the largest lake in Ethiopia. The lake itself is a remarkable sight, teeming with birdlife and offering a serene escape. You can take boat trips on the lake to explore monasteries on islands or simply relax and soak in the picturesque views._Google</p>
     <p class="text-sm"><span class="font-bold text-md pl-2">Area:</span>72km square</p>
     <p class="text-sm"><span class="font-bold tex-md pl-2" >Elevation:</span>1,800m</p>
     <p class="text-sm"><span class="font-bold tex-md pl-2">Region:</span>Amhara</p>
     <p class="text-sm"><span class="font-bold tex-md pl-2">Weather:</span>wind SE 6km/hr </p>
     <p class="text-sm"><span class="font-bold tex-md pl-2">Local time:</span>Friday 9:30AM</p>
     <p class="text-sm"><span class="font-bold tex-md pl-2">Area code:</span>(+251)58</p>
     <p class="text-sm pl-2 text-blue-500 pt-2">Plan a trip</p>
  </section>
   
</template>

<script>
import { useRoute } from "vue-router";

  const route=useRoute()
  const {keyword}=route.key
</script>

<style>

</style>