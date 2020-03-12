<template>
  <div id="app">
    <h2>Got any anecdotes?</h2>
    <button class="btn btn-primary" @click="initialAnecdotes">Add Ten Random Jokes</button>
    <div class="col-md-12">
      <Anecdote v-for="(anecdote,i) in $store.state.anecdotes" :anecdote="anecdote" :key="i" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Anecdote from "./Anecdote.vue";
export default {
  methods: mapActions(["initialAnecdotes"]),
  components: {
    Anecdote
  }
};
</script>

<style>
</style>