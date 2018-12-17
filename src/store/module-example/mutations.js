export function refreshJobs (state, newJobs) {
  state.jobs.length = 0
  const moment = require('moment')
  newJobs.forEach((newJob) => {
    const newJobData = newJob.data()
    const newJobWithFormattedTimestamp = {
      fromFormatted: moment.unix(newJobData.from.seconds).format('lll'),
      toFormatted: moment.unix(newJobData.to.seconds).format('lll'),
      firestoreRef: newJob.ref,
      ...newJobData
    }
    state.jobs.push(newJobWithFormattedTimestamp)
  })
}
