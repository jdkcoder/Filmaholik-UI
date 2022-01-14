import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/Home.vue";
import FilmDetails from "./views/Films/Details/fullDetails.vue";
import Player from "./views/Films/Player.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/film/",
    component: FilmDetails,
    name: "Film Details",
  },
  {
    path: "/play/",
    component: Player,
    name: "Film Player",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
