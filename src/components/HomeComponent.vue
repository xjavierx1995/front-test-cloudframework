<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/welcome.svg')"
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
    <ModalErrorComponent :showDialog="showErrorDialog"/>
  </v-container>
</template>

<script>
  import ModalErrorComponent from './ModalError.vue'
  export default {
    name: 'HelloWorld',
    components: {
      ModalErrorComponent
    },

    data: () => ({
      user: {},
      showErrorDialog: false,
    }),
    mounted() {
        let params = {
            id: this.$route.params.id
        }
        this.$axios.get('users', { params }).then(response => {
            this.user = response.data.data;
        }).catch(err => {
            if (err.response.data.status == 400 || err.response.data.status == 404) {
                this.showErrorDialog = true;
            }
        })
    },
  }
</script>
