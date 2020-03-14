import Vue from "vue";
import VueRouter from "vue-router";
import EditAnecdote from "../components/EditAnecdote.vue";
import Main from "../components/Main.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Main", component: Main },
    { path: "/edit", name: "Edit", component: EditAnecdote }
  ]
});

export default router;
