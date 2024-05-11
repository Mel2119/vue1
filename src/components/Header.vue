<script setup>


</script>

<template>
  <header class="header">
    <div class="container mx-auto flex flex-row-reverse justify-between items-center h-14 ">   
     <nav>
        <ul class="flex items-center flex-row-end space-x-8 ">
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#"><img src="../assets/userimage.png" class="user" alt=""></a></li>      
        </ul>
     </nav>
    </div>
    </header>
 
</template>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(0, 0, 0, 0.09);
}

.logo img {
  height: 36px;
}

.nav {
  font-size: 0.875rem; 
}

.nav a {
  color: #000;
  text-decoration: none;
  padding: 5px 10px;
}

.nav a:hover {
  background-color: #f5f5f5;
}
.user{
    width: 30px;
    height: 30px;
}
ul li{
    font-size: 16px;
    margin-right: 0;

}
</style>
