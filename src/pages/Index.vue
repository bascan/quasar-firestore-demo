<template>
  <q-page class="flex flex-center">
    <q-table
      title="Jobs"
      :data="tableData"
      :columns="columns"
      row-key="reference"
      selection="multiple"
      :selected.sync="selected"
    >
      <template slot="top-selection" slot-scope="props">
        <q-btn color="secondary" flat label="Delete" @click="deleteRow"/>
      </template>
    </q-table>
  </q-page>
</template>

<style>
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'JobList',
  data: () => ({
    selected: [],
    loading: false,
    columns: [
      {
        name: 'ref',
        required: true,
        label: 'Reference',
        align: 'left',
        field: 'reference',
        sortable: true
      },
      {
        name: 'title',
        required: true,
        label: 'Title',
        align: 'left',
        field: 'title',
        sortable: true
      },
      {
        name: 'desc',
        required: true,
        label: 'Description',
        align: 'left',
        field: 'description',
        sortable: true
      },
      {
        name: 'from',
        required: true,
        label: 'From',
        align: 'left',
        field: 'fromFormatted',
        sortable: true
      },
      {
        name: 'to',
        required: true,
        label: 'To',
        align: 'left',
        field: 'toFormatted',
        sortable: true
      }
    ]
  }),
  computed: mapGetters({
    tableData: 'example/jobs'
  }),
  created () {
    this.$store.state.$db.collection('jobs').orderBy('from').onSnapshot(
      (next) => this.$store.dispatch('example/addJobSnapshot', next),
      (error) => console.log(error)
    )
  },
  methods: {
    deleteRow () {
      this.selected.forEach((row) => {
        const referenceToDelete = row.reference
        console.log('Deleting job: ' + referenceToDelete)
        const jobToDelete = this.$store.state.example.jobs.find((job) =>
          referenceToDelete === job.reference
        )
        jobToDelete.firestoreRef.delete()
      })
    }
  }
}
</script>
