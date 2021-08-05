<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <div class="d-flex align-center">

        <router-link :to="'/home/'+client_id" class="text-decoration-none text-h6 white--text text-uppercase">
          cloud framework 
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :to="'/form/'+client_id"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
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
    client_id: null
  }),
  mounted() {
    this.client_id = this.$route.params.id
  },
};
</script>
