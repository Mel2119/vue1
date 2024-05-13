import {createRouter,createWebHistory} from "vue-router"
import Home from '../views/Home.vue'
// import Searchresult from '../components/Searchresult.vue'
import rickandmorty from '../components/rickandmorty.vue'
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       {
         path:"/",
         name:"home",
         component:Home
       },
       {
        path:"/rickandmorty",
        name:"rickandmorty",
        component:rickandmorty
      }

      //  {
      //   path:"/Searchresult/:key",
      //   name:"Serachresult",
      //   component:Searchresult
      // }
    ]
})
export default router;