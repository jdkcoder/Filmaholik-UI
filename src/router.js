import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/Home.vue";
import FilmDetails from "./views/Films/Details/fullDetails.vue";


const routes = [
  {
    path: "/",
    component: Home,
    name: "Home"
  },{
    path: "/film/",
    component: FilmDetails,
    name: "Film Details"
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;