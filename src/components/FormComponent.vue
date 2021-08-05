<template>
    <div>
        <v-form>
            <v-container class="pa-10">
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        name="name"
                        :error-messages="errors.first('name')"
                        v-validate="'required'"
                        label="Nombre"
                        v-model="form.name"
                        readonly
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        name="surname"
                        :error-messages="errors.first('surname')"
                        v-validate="'required'"
                        label="Apellido"
                        v-model="form.surname"
                        readonly
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        name="email"
                        :error-messages="errors.first('email')"
                        v-validate="'required|email'"
                        label="Email"
                        v-model="form.email"
                        readonly
                    ></v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        name="teléfono"
                        :error-messages="errors.first('teléfono')"
                        v-validate="'required|numeric|max:25'"
                        label="Teléfono"
                        v-model="form.phone"
                        type="number"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                        name="edad"
                        :error-messages="errors.first('edad')"
                        v-validate="'required|numeric|max:3|max_value:100'"
                        label="Edad"
                        v-model="form.age"
                        type="number"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <vuetify-money
                        v-validate="'required|max_value:1000|min_value:11'"
                        name="loan_amount"
                        :error-messages="errors.first('loan_amount')"
                        v-model="form.loan_amount"
                        label="Importe préstamo"
                        :options="{
                            prefix: '$',
                            suffix: '',
                            length: 11,
                            precision: 0
                        }"
                    />
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-menu
                        v-model="loan_date_menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="form.loan_date"
                                name="fecha"
                                v-validate="'required|future_date'"
                                :error-messages="errors.first('fecha')"
                                label="Fecha del préstamo"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker 
                            :allowed-dates="allowedDates" 
                            v-model="form.loan_date" 
                            @input="loan_date_menu = false"
                        ></v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-select
                        name="semanas"
                        :error-messages="errors.first('semanas')"
                        v-validate="'required'"
                        label="Tiempo a devolver"
                        v-model="form.loan_weeks"
                        :items="weeks"
                        item-text="name"
                        item-value="value"
                    ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                    <v-checkbox
                        name="terminos"
                        :error-messages="errors.first('terminos')"
                        v-validate="'required|required_true'"
                        label="Aceptar térnimos y condiciones"
                        v-model="form.check"
                    >
                        <template v-slot:label>
                    <div>
                            <a
                            target="_blank"
                            href="https://comparte.bnext.io/privacidad"
                            @click.stop
                            >
                            <u>Términos y condiciones</u>
                            </a>
                    </div>
                    </template>
                    </v-checkbox>
                </v-col>

                <v-col cols="12" sm="12" md="12" class="text-right">
                    <v-spacer></v-spacer>
                    <v-btn @click="submit" :loading="loading" elevation="0" color="purple" class="white--text">
                        Guardar
                    </v-btn>
                </v-col>

            </v-row>
            </v-container>
        </v-form>
        <ModalErrorComponent :showDialog="showErrorDialog"/>
    </div>
</template>
<script>
import ModalErrorComponent from './ModalError.vue'
export default {
    components: {
        ModalErrorComponent
    },
    data() {
        return {
            user: {},
            user_id: null,
            form: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                age: '',
                loan_amount: 0,
                loan_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000 )).toISOString().substr(0, 10),
                loan_weeks: "",
                check: null
            },
            loan_date_menu: false,
            weeks: [
                {
                    value: '1',
                    name: '1 semana'
                }
            ],
            loading: false,
            showErrorDialog: false
        }
    },
    mounted() {
        let params = {
            id: this.$route.params.id
        }
        this.$axios.get('users', { params }).then(response => {
            this.user = response.data.data;
            this.showErrorDialog = false;
            this.initForm();
        }).catch(err => {
            if (err.response.data.status == 400 || err.response.data.status == 404) {
                console.log('error');
                this.showErrorDialog = true;
            }
        })
    },
    methods: {
        initForm(){
            this.form = {
                name: this.user.name,
                surname: this.user.surname,
                email: this.user.email,
                phone: this.user.phone,
                age: this.user.age.toString(),
                loan_amount: 0,
                loan_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000 )).toISOString().substr(0, 10),
                loan_weeks: "",
                check: null
            }

            for (let index = 2; index <= 20; index++) {
                this.weeks.push({
                    value: index.toString(),
                    name: index + ' semanas'
                })
            }
        },
        submit(){

            this.$validator.validateAll().then((valid) => {
                if (valid) {
                    this.loading = true;
                    this.$axios.post(`users/${this.$route.params.id}`, this.form).then(response => {
                        this.loading = false;
                        this.initForm();
                    })
                }else{
                    console.log('algo');
                }
            });
        },
        allowedDates(date){
            return date > (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        }
    },
}
</script>
<style>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    input[type=number] { -moz-appearance:textfield; }
</style>