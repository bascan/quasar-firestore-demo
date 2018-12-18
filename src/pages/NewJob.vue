  <template>
    <q-page class='flex flex-center'>
      <q-card>
        <q-card-title>
          Add Job
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <q-field label='Reference' :count='6' :error="$v.form.reference.$error">
            <q-input v-model='form.reference' />
          </q-field>
          <q-field label='Title' :count='25' :error="$v.form.title.$error">
            <q-input v-model='form.title' />
          </q-field>
          <q-field label='Description' :count='50' :error="$v.form.description.$error">
            <q-input v-model='form.description' />
          </q-field>
          <q-field label='From' :error="$v.form.from.$error">
            <q-datetime v-model="form.from" type="datetime" />
          </q-field>
          <q-field label='To' :error="$v.form.to.$error">
            <q-datetime v-model="form.to" type="datetime" />
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
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'NewJob',
  data: () => {
    return {
      form: {
        reference: '',
        title: '',
        description: '',
        from: '',
        to: ''
      }
    }
  },
  validations: {
    form: {
      reference: {required},
      title: {required},
      description: {required},
      from: {required},
      to: {required}
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review your input.')
        console.log('Form validation failed.')
        return
      }

      const moment = require('moment')
      const fromUnix = moment(this.form.from).format('X')
      const toUnix = moment(this.form.to).format('X')

      console.log('Adding job: ' + this.form.reference + ', ' + this.form.title + ', ' + this.form.description + ', ' + fromUnix + ', ' + toUnix)
      this.$store.state.$db.collection('jobs').add({
        reference: this.form.reference,
        title: this.form.title,
        description: this.form.description,
        from: new firebase.firestore.Timestamp(fromUnix),
        to: new firebase.firestore.Timestamp(toUnix)
      })
      this.$router.push('/')
    }
  }
}
</script>
