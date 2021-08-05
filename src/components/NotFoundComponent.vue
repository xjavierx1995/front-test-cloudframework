<template>
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/404.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h4 class="display-1 font-weight-bold mb-3">
          Página no encontrada
        </h4>

        <p class="subheading font-weight-bold">
          No olvides colocar el identificador de tu usuario en la url
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>