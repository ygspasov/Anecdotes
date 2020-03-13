export default {
  INITIAL_ANECDOTES(state, payload) {
    state.anecdotes = payload;
  },
  ADD_RANDOM_ANECDOTE(state, payload) {
    state.anecdotes.unshift(payload);
  },
  ADD_ANECDOTE(state, payload) {
    state.anecdotes.unshift(payload);
  },
  REMOVE_ANECDOTE(state, index) {
    state.anecdotes.splice(index, 1);
  }
};
