<template>
  <v-layout column justify-left align-left>
    <p style="text-align:center"><img src="/logoEPS.gif" /></p>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-left"></div>
      <v-card>
        <v-card-text>
          <p style="font-weight: bold;font-size: 20px;">IRAV - Módulo 2</p>
          <p>Autores: Qiang Sun, Nicolás Trejo y Vanessa Salazar</p>
          <div v-if="user">
            <pre v-text="`${user.user.displayName}`"></pre>
          </div>
          <div v-else>
            <p>
              Not logged yet, Please <nuxt-link to="/login">Login </nuxt-link>
            </p>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="css" scoped>
pre {
  white-space: pre-wrap;
}
</style>
