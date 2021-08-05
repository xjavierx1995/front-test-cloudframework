<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h4 class="display-1 font-weight-bold mb-3">
          Welcome to Cloud Framework
        </h4>

        <p class="subheading font-weight-bold">
          {{ user.name }} {{ user.surname }} - {{ user.email }}
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      user: {}
    }),
    mounted() {
        let params = {
            id: this.$route.params.id
        }
        this.$axios.get('users', { params }).then(response => {
            this.user = response.data.data;
        })
    },
  }
</script>
