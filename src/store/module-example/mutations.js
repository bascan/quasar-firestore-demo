export function refreshJobs (state, newJobs) {
  state.jobs.length = 0
  newJobs.forEach(
    (newJob) => state.jobs.push(newJob)
  )
}
