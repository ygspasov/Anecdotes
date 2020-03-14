<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Anecdote from "./Anecdote.vue";
export default {
  methods: mapActions([
    "initialAnecdotes",
    "commitAnecdote",
    "addRandomAnecdote"
  ]),
  components: {
    Anecdote
  }
};
</script>

<style></style>
