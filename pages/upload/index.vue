<template>
  <div class="form-group col-sm-12">
    <div v-if="user" class="contenido">
      Usuario identificado:
      <pre ref="username" v-text="`${user.user.displayName}`"></pre>
      <br />
      <div class="field">
        <label class="label">Rellene el año de la asignatura:</label>
        <div class="control">
          <input ref="anyo" class="input" name="año" placeholder="2019" />
        </div>
      </div>

      <div class="field">
        <label class="label">Nombre de la asignatura:</label>

        <div class="control">
          <input
            ref="subject"
            class="input"
            name="asignatura"
            placeholder="IRAV"
          />
        </div>
      </div>
      <p><label>Adjunte el fichero a subir</label></p>
      <p>
        <input
          id="archivo"
          ref="adjunto"
          type="file"
          :disabled="loading"
          class="form-control"
          data-validate="Adjuntar"
        />
      </p>
      <button :disabled="loading" @click="agregar">Subir Archivo</button>
      <p v-if="url">
        Archivo disponible en:
        <a :href="url">Link</a>
      </p>
    </div>
    <div v-else>
      Not logged yet, Please <nuxt-link to="/login">Login </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase /*, { db } */ from '~/services/fireinit'

export default {
  data() {
    return {
      loading: false,
      url: ''
    }
  },
  computed: mapState(['user']),
  methods: {
    async agregar() {
      try {
        const { files } = this.$refs.adjunto
        this.loading = true
        const file = files[0]
        console.log(this.$refs.subject.value)
        console.log(this.$refs.anyo.value)
        console.log(file.name)
        console.log(`${this.user.user.uid}`)
        if (file) {
          const response = await firebase
            .storage()
            .ref(`${file.name}`)
            .put(file)
          const url = await response.ref.getDownloadURL()
          console.log('archivo disponible en ', url)
          this.downloadUrl = url
          await firebase
            .firestore()
            .collection('notes')
            .add({
              subject: this.$refs.subject.value,
              anyo: this.$refs.anyo.value,
              fichero: file.name,
              url: url
            })
            .then(function(docRef) {
              console.log('Document written with ID: ', docRef.id)
            })
        } else {
          console.log('falta el archivo')
        }
      } catch (error) {
        console.error(error)
      }
      this.loading = false
    }
  }
}
</script>

<style>
label {
  margin-right: 0.5em;
  padding-top: 0.2em;
  text-align: left;
  font-weight: bold;
}
</style>
