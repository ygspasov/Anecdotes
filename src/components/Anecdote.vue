<template>
  <div class="col-md-6">
    <div class="anecdote-card">
      <div class="card-block">
        <p>
          <u>{{anecdote.setup}}</u>
        </p>
        <p>
          <em>{{anecdote.punchline}}</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["anecdote"]
};
</script>

<style>
</style>