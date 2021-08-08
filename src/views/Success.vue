<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                :src="require('../assets/success_sent.svg')"
                class="my-3"
                contain
                height="200"
                />
            </v-col>

            <v-col class="mb-4" cols="12">
                <h4 class="display-1 font-weight-bold mb-3">
                    Su solicitud fue enviada con éxito.
                </h4>
                <p> En breve nos pondremos en contacto con usted</p>
            </v-col>

            <v-col class="mb-4 text-left" cols="12" md="4">
                <v-card>
                    <v-card-text class="black--text">
                        <v-timeline dense>
                            <v-timeline-item color="purple" small>
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>Nombre</strong>
                                    </div>
                                    <div>{{ user_info.name }}</div>
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="purple" small>
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>Apellido</strong>
                                    </div>
                                    <div>{{ user_info.surname }}</div>
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="purple" small>
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>email</strong>
                                    </div>
                                    <div>{{ user_info.email }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="mb-4 text-left" cols="12" md="4">
                <v-card >
                    <v-card-text class="black--text">
                        <v-timeline dense>
                            <v-timeline-item color="purple" small>
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>Edad</strong>
                                    </div>
                                    <div>{{ user_info.age }}</div>
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="purple" small>
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>Monto solicitado</strong>
                                    </div>
                                    <div>{{ user_info.loan_amount }}</div>
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="purple" small>
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>Tiempo para pagar</strong>
                                    </div>
                                    <div>{{ user_info.loan_weeks }} semanas</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            user_info: {}
        }
    },
    mounted() {
        this.user_info = JSON.parse(localStorage.getItem('user'));
    },
}
</script>