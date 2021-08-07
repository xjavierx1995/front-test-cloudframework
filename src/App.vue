<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
      class="text-center"
    >
      <div class="d-flex align-center">
        <router-link :to="'/'+$route.params.id" class="text-decoration-none text-md-h6 white--text text-uppercase">
          cloud framework 
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        class="d-sm-flex d-none"
        :to="'/form/'+$route.params.id"
        text
      >
        <span class="mr-2">Solicitar prestamo</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-bottom-navigation class="d-sm-none d-flex" app fixed dark background-color="purple">
      <v-btn :to="'/'+$route.params.id" class="white--text">
        <span>Inicio</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="'/form/'+$route.params.id">
        <span>Prestamo</span>

        <v-icon>mdi-cash</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
  mounted() {
  },
};
</script>
