  <template>
    <q-page class='flex flex-center'>
      <q-card>
        <q-card-title>
          Add Job
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-field label='Reference' :count='5'>
            <q-input v-model='reference' />
          </q-field>
          <q-field label='Title' :count='25'>
            <q-input v-model='title' />
          </q-field>
          <q-field label='Description' :count='50'>
            <q-input v-model='description' />
          </q-field>
          <q-field label='From'>
            <q-datetime v-model="from" type="datetime" />
          </q-field>
          <q-field label='To'>
            <q-datetime v-model="to" type="datetime" />
          </q-field>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat @click="submit()" color="primary" label="Add" />
        </q-card-actions>
      </q-card>
    </q-page>
  </template>

  <style>
  </style>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  name: 'NewJob',
  data: () => {
    return {
      reference: '',
      title: '',
      description: '',
      from: '',
      to: ''
    }
  },
  methods: {
    submit () {
      const moment = require('moment')
      const fromUnix = moment(this.from).format('X')
      const toUnix = moment(this.to).format('X')

      console.log('Adding job: ' + this.reference + ', ' + this.title + ', ' + this.description + ', ' + fromUnix + ', ' + toUnix)
      this.$store.state.$db.collection('jobs').add({
        reference: this.reference,
        title: this.title,
        description: this.description,
        from: new firebase.firestore.Timestamp(fromUnix),
        to: new firebase.firestore.Timestamp(toUnix)
      })
    }
  }
}
</script>
