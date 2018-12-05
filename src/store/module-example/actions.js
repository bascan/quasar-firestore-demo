export function addJobSnapshot ({commit}, snapshot) {
  snapshot.forEach(doc => commit('addJob', doc.data()))
}
