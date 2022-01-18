import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/Home.vue";

import Login from "./views/Auth/Login.vue";
import Register from "./views/Auth/Register.vue";
import Recover from "./views/Auth/Recover.vue";

import filmDetails from "./views/Films/Details/fullDetails.vue";
import castDetails from "./views/Films/Details/castDetails.vue";
import directorDetails from "./views/Films/Details/fullDetails.vue";
import Player from "./views/Films/Player.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/recover",
    component: Recover,
    name: "Recover",
  },
  {
    path: "/film/",
    component: filmDetails,
    name: "Film Details",
  },
  {
    path: "/cast/",
    component: castDetails,
    name: "Cast Details",
  },
  {
    path: "/director/",
    component: directorDetails,
    name: "Director Details",
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
