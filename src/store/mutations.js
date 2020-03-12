export default {
  INITIAL_ANECDOTES(state, payload) {
    state.anecdotes = payload;
  },
  ADD_ANECDOTE(state, payload) {
    state.anecdotes.push(payload);
  }
};
