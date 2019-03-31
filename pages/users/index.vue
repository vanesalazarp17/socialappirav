<template>
  <v-layout column justify-left align-left>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline" style="padding-left:5px;"
          >Ya estás conectado...</v-card-title
        >
        <p style="padding-left:10px;">Nombre de usuario logueado:</p>
        <pre
          style="padding-left:10px;"
          v-text="`${user.user.displayName}`"
        ></pre>
        <hr class="my-3" />
        <v-card-text>
          <p>
            <button type="button" class="btn btn-danger" @click="signOut">
              Sign Out
            </button>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {},
  computed: mapState(['user']),
  methods: {
    ...mapActions(['logout']),
    async signOut() {
      await this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css" scoped>
pre {
  white-space: pre-wrap;
}
</style>
