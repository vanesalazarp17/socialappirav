<template>
  <v-card>
    <div id="app" class="container">
      <div class="search-holder">
        <input
          v-model="search"
          type="search"
          class="search-box"
          placeholder="Search..."
          @keyup.enter="getTokens"
        />
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Notes List</h3>
        </div>
        <div class="panel-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>File name</th>
                <th>Subject</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(note, idx) in notesAll" :key="idx">
                <td>
                  <a v-bind:href="note.url">{{ note.fichero }}</a>
                </td>
                <td>{{ note.subject }}</td>
                <td>{{ note.year }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import firebase /*, { db } */ from '~/services/fireinit'

export default {
  data() {
    return {
      notesAll: []
    }
  },
  created: function() {
    firebase
      .firestore()
      .collection('notes')
      .orderBy('fichero')
      .limit(20)
      .get()
      .then(querySnapshot => {
        const resultado = []
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            data: doc.data(),
            fichero: doc.data().fichero,
            subject: doc.data().subject,
            url: doc.data().url,
            year: doc.data().anyo
          }
          resultado.push(data)
        })
        this.notesAll = resultado
      })
  },

  methods: {}
}
</script>

<style>
th {
  background-color: #4caf50;
  color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th,
td {
  border-bottom: 1px solid #ddd;
  padding: 15px;
  text-align: left;
}
,
html,
body {
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(lighten(#3f51b5, 25%), #3f51b5);
}
</style>
