export function refreshJobs (state, newJobs) {
  state.jobs.length = 0
  const moment = require('moment')
  newJobs.forEach((newJob) => {
    const newJobWithFormattedTimestamp = {
      fromFormatted: moment.unix(newJob.from.seconds).format('lll'),
      toFormatted: moment.unix(newJob.to.seconds).format('lll'),
      ...newJob
    }
    state.jobs.push(newJobWithFormattedTimestamp)
  })
}
