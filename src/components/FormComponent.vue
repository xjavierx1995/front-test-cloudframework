<template>
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
                <v-text-field
                    name="loan_amount"
                    :error-messages="errors.first('loan_amount')"
                    v-validate="'required|numeric'"
                    label="Importe prestamo"
                    v-model="form.loan_amount"
                    prefix="$"
                >
                </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
            <v-text-field
                name="loan_date"
                :error-messages="errors.first('loan_date')"
                v-validate="'required'"
                label="Fecha del préstamo"
                v-model="form.loan_date"
            ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
            <v-text-field
                name="loan_weeks"
                :error-messages="errors.first('loan_weeks')"
                v-validate="'required'"
                label="Tiempo a devolver"
                v-model="form.loan_weeks"
            ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
            <v-checkbox
                name="check"
                :error-messages="errors.first('check')"
                v-validate="'required_true'"
                label="Aceptar térnimos y condiciones"
                v-model="form.check"
            ></v-checkbox>
            </v-col>

            <v-col cols="12" sm="12" md="12" class="text-right">
                <v-spacer></v-spacer>
                <v-btn @click="submit" elevation="0" color="purple" class="white--text">
                    Guardar
                </v-btn>
            </v-col>

        </v-row>
        </v-container>
    </v-form>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            user_id: null,
            form: {}
        }
    },
    mounted() {
        let params = {
            id: this.$route.params.id
        }
        this.$axios.get('users', { params }).then(response => {
            this.user = response.data.data;
            console.log(this.user);
            this.initForm();
        })
    },
    methods: {
        initForm(){
            this.form = {
                name: this.user.name,
                surname: this.user.surname,
                email: this.user.email,
                phone: this.user.phone,
                age: this.user.age,
                loan_amount: null,
                loan_date: null,
                loan_weeks: null,
                check: null
            }
        },
        submit(){
            this.$validator.validateAll().then((valid) => {
                if (valid) {
                /* aqui va la consulta en caso e que todo este validado */
                }else{
                    console.log('algo');
                }
            });
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