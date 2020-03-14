<template>
  <div id="app">
    <h2>Got any anecdotes?</h2>
    <button class="btn btn-secondary" @click="initialAnecdotes">
      Display Ten Random Anecdotes
    </button>
    <button class="btn btn-secondary" @click="addRandomAnecdote">
      Add Random Anecdote
    </button>
    <h4>Number of anecdotes on screen: {{ $store.state.anecdotes.length }}</h4>

    <div class="container">
      <div class="row">
        <Anecdote
          v-for="(anecdote, i) in $store.state.anecdotes"
          :anecdote="anecdote"
          :key="i"
          :index="i"
        />
      </div>
    </div>
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
