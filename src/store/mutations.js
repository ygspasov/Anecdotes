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
  },
  SET_ID_TO_EDIT(state, id) {
    state.id = id;
  },
  EDIT_ANECDOTE(state, { id, updatedAnecdote }) {
    let index = state.anecdotes.findIndex(element => element.id === id);
    state.anecdotes[index] = updatedAnecdote;
  }
};
