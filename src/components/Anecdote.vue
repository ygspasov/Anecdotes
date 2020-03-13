<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{anecdote.setup}}</h5>
        <p class="card-text">{{anecdote.punchline}}</p>
        <div class="actions">
          <a href="#" class="btn btn-secondary">Edit</a>
          <a href="#" class="btn btn-secondary" @click="removeAnecdote(index)">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["anecdote", "index"],
  methods: mapActions(["removeAnecdote"])
};
</script>

<style>
</style>