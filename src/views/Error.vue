<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                :src="require('../assets/error.svg')"
                class="my-3"
                contain
                height="200"
                />
            </v-col>

            <v-col class="mb-4" cols="12">
                <h4 class="display-1 font-weight-bold mb-3">
                    Ha ocurrido un error en el envio del formulario
                </h4>
            </v-col>

            <v-col class="mb-4">
                <v-btn color="purple" class="white--text" :to="'/form/'+$route.params.id">
                    Regresar
                </v-btn>
            </v-col>

        </v-row>
    </v-container>
</template>