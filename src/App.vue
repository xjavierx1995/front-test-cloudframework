<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <div class="d-flex align-center">

        <router-link :to="'/home/'+$route.params.id" class="text-decoration-none text-md-h6 white--text text-uppercase">
          cloud framework 
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :to="'/form/'+$route.params.id"
        text
      >
        <span class="mr-2">Solicitar prestamo</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
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
