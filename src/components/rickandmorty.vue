<template>
  <div class="card-container">
  <div v-for="country in result.countries" :key="country.name " class="card">
            <span class="justify-center flex flex-center scale-150 space-y-2">{{ country.emoji }}</span> <br>
            <span>{{ country.name }}</span><br>
            <span>{{ country.capital }}</span> <br>
            <span>{{ country.phone }}</span> <br>
            <span>{{ country.continent.name }}</span> <br>
            <span>{{ country.currency }}</span> <br>
            <hr>
        </div>
  </div>
</template>

<script setup>
  import {useRoute} from "vue-router";
  import {useQuery} from '@vue/apollo-composable'
  import {gql} from 'graphql-tag'
  const { result } = useQuery(gql`query {
  countries{
    code,
    name,
    emoji,
    capital ,  
    phone,
    continent{name},
    currency
  }
}
`)
const route=useRoute()
const {keyword}=route.params
</script>

<style scoped>

.card-container {
  display: flex; 
  flex-wrap: wrap; 
  gap: 10px;
}

.card {
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  width: 250px; 
  color: rgb(5, 11, 190);
  margin-left: 60px;
  margin-top: 8px;
  /* transform: ease-in-out 0.2s ease-in-out 0.2s;
  animation: forwards; */
 
}
.card:hover{
  background-color: rgb(89, 234, 92);
  cursor: pointer;
}


</style>