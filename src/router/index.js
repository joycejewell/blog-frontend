import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TestView from "../views/TestView.vue";
import SignUpView from "../views/SignUpView.vue";
import LogInView from "../views/LogInView.vue";
import LogOutView from "../views/LogOutView.vue";
import PostsIndex from "../views/PostsIndex.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/login",
    name: "login",
    component: LogInView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOutView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsIndex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
