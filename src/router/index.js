import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Quiz from "@/views/Quiz.vue";
import Login from "@/views/Login.vue";
import About from "@/views/About.vue";
import Success from "@/views/PostSuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/quiz",
    name: "quiz",
    component: Quiz
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/success",
    name: "success",
    component: Success
  }
];

const router = new VueRouter({
  routes
});

export default router;
