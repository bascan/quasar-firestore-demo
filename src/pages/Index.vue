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
import {mapGetters} from 'vuex'

export default {
  name: 'JobList',
  computed: mapGetters({
    jobs: 'example/jobs'
  }),
  created () {
    this.$store.state.$db.collection('jobs').orderBy('from').onSnapshot(
      (next) => this.$store.dispatch('example/addJobSnapshot', next),
      (error) => console.log(error)
    )
  }
}
</script>
