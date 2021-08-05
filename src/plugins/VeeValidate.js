import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import es from "vee-validate/dist/locale/es";
Validator.localize('es', es);
Vue.use(VeeValidate, {
    classes: true,
    classNames: {
        valid: "is-valid",
        invalid: "is-invalid"
    },
    inject: true,
    locale: 'es'
});

VeeValidate.Validator.extend("password_strong", {
    getMessage: () =>
        `La contraseña debe contener al menos una (1) letra mayuscula, una (1) letra minuscula, un (1) numero y un (1) caracter especial (, . _ & *)`,
    validate: value => {
        var strongRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.{8,})"
        );
        return strongRegex.test(value);
    }
});

VeeValidate.Validator.extend("is_ruc", {
    getMessage: () =>
        `El ruc debe de empezar con 20 ó 10`,
    validate: value => {
        return value.toString().startsWith('10') || value.toString().startsWith('20');
    }
});

VeeValidate.Validator.extend("required_true", {
    getMessage: () =>
        `Seleccione para continuar`,
    validate: value => {
        return !!value;
    }
});

VeeValidate.Validator.extend("future_date", {
    getMessage: () =>
        `La fecha debe ser mayor a la actual`,
    validate: value => {
        return value > (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
        
    }
});
