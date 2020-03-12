//https://official-joke-api.appspot.com/random_ten
export default {
  initialAnecdotes({ commit }) {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => commit("INITIAL_ANECDOTES", json));
  },
  commitAnecdote({ commit }, context) {
    commit("ADD_ANECDOTE", context);
  }
};
