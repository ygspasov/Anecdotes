<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Edit Anecdote</h2>
        <p>
          <router-link to="/" class="btn btn-secondary">Home</router-link>
        </p>
        <form>
          <div class="form-group">
            <label for="Setup">Question</label>
            <input
              v-model="setup"
              type="text"
              class="form-control"
              id="setup"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="Punchline">Answer</label>
            <input v-model="punchline" type="text" class="form-control" id="punchline" />
          </div>
          <button type="submit" class="btn btn-secondary" @click.prevent="updateAnecdote">Save</button>
        </form>
        ID:{{$store.state.id}}
      </div>
    </div>
  </div>
</template>

<script>
import router from "../routes/router";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$store.state.id,
      type: "general",
      setup: "",
      punchline: "",
      updatedAnecdote: {
        id: 0,
        type: "general",
        setup: "",
        punchline: ""
      }
    };
  },
  props: ["anecdote", "index"],
  methods: {
    ...mapActions(["editAnecdote"]),
    updateAnecdote: function() {
      this.updatedAnecdote.id = this.id;
      this.updatedAnecdote.setup = this.setup;
      this.updatedAnecdote.punchline = this.punchline;
      let id = this.updatedAnecdote.id;
      let updatedAnecdote = this.updatedAnecdote;
      this.$store.dispatch("editAnecdote", { id, updatedAnecdote });
      router.push({ path: "/" });
    }
  }
};
</script>

<style></style>
