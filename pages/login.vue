<template>
  <v-layout column justify-left align-left>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-text>
          <p style="font-weight: bold;font-size: 20px;">
            Por favor, inicie sesion con tu usuario de google
          </p>
          <div id="firebaseui-auth-container" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import firebase, { auth } from '~/services/fireinit'
import * as firebaseui from 'firebaseui'

export default {
  computed: {
    ...mapGetters('user', ['logged']),
    ...mapState('user', ['afterLogin'])
  },
  watch: {
    logged: {
      immediate: true,
      handler(logged) {
        if (logged) this.next()
      }
    }
  },
  fetch({ store }) {
    store.dispatch('user/initAuth')
  },
  created: function() {
    this.showLogin()
  },
  methods: {
    next() {
      this.$router.push(this.afterLogin)
    },
    showLogin() {
      const uiConfig = {
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
      }

      if (firebaseui.auth.AuthUI.getInstance()) {
        const ui = firebaseui.auth.AuthUI.getInstance()
        ui.start('#firebaseui-auth-container', uiConfig)
      } else {
        const ui = new firebaseui.auth.AuthUI(auth)
        ui.start('#firebaseui-auth-container', uiConfig)
      }
    }
  }
}
</script>
// dist.$router
<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
