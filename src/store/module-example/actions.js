export function addJobSnapshot ({commit}, snapshot) {
  const newJobs = []
  snapshot.forEach(doc => newJobs.push(doc.data()))
  commit('refreshJobs', newJobs)
}
