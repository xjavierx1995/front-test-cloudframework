<template>
  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      persistent
      max-width="350"
    >
      <v-card>
        <v-card-title class="text-h5">
          Usuario no encontrado
        </v-card-title>
        <v-card-text class="black--text">
            No existe un usuario con el numero de identificación <span class="text-weight-bold">{{$route.params.id }}</span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    props: [
        'showDialog',
        'user_id'
    ],
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>