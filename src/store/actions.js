export default {
  initialAnecdotes({ commit }) {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => commit("INITIAL_ANECDOTES", json));
  },
  addRandomAnecdote({ commit }) {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(json => commit("ADD_RANDOM_ANECDOTE", json));
  },
  commitAnecdote({ commit }, context) {
    commit("ADD_ANECDOTE", context);
  },
  removeAnecdote({ commit }, index) {
    commit("REMOVE_ANECDOTE", index);
  }
};
