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
                <th>Subject</th>
                <th>Year</th>
                <th>Doc name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test 1 IRAV</td>
                <td>Test 1 año</td>
                <td>Test 1 doc apuntes.pdf</td>
              </tr>
              <tr>
                <td>Test 2 IRAV</td>
                <td>Test 2 año</td>
                <td>Test 2 doc apuntes.pdf</td>
              </tr>
              <tr>
                <td>Test 3 IRAV</td>
                <td>Test 3 año</td>
                <td>Test 3 doc apuntes.pdf</td>
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
const notesAll = firebase.firestore().collection('notes')

export default {
  firebase: {
    notes: notesAll
  },
  data() {
    return {}
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
