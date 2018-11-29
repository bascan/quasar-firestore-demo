<template>
  <q-page class="flex flex-center">
    <q-list>
      <q-list-header>
        Jobs
      </q-list-header>
      <q-item v-for="(job, idx) in jobs" :key="idx">
        <q-item-main :label="job.title"/>
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'JobList',
  data () {
    return {
      jobs: []
    }
  },
  created () {
    this.$store.state.$db.collection('jobs').orderBy('from').onSnapshot(
      (next) => console.log(next),
      (error) => console.log(error)
    )
  }
}
</script>
