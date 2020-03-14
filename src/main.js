import Vue from "vue";
import App from "./components/App.vue";
import store from "./store";
import router from "./routes/router";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

store.dispatch("initialAnecdotes");
