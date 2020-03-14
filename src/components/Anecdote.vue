<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ anecdote.setup }}</h5>
        <p class="card-text">{{ anecdote.punchline }}</p>
        <ul>
          <router-link tag="li" to="/edit" class="btn btn-secondary">
            <a @click="setID">Edit</a>
          </router-link>
          <router-link tag="li" to class="btn btn-secondary">
            <a @click="removeAnecdote(index)">Delete</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["anecdote", "index"],
  methods: {
    ...mapActions(["removeAnecdote"]),
    setID: function() {
      console.log("setID");
      this.$store.dispatch("setIdToEdit", this.anecdote.id);
    }
  }
};
</script>

<style scoped>
a,
a:hover {
  color: white;
  text-decoration: unset;
}

ul {
  padding: 0;
}
</style>
