# Documentación Front

::: warning Nota de advertencia de compatibilidad
El proyecto se realizo con la version 1.22.4 de yarn
:::

## Rutas

### /:id

Ingreso a la pagina de inicio del sistema.

#### Parametros

`id`: Número de identificación del usuario visitante.

### /form/:id

Ingreso al formulario de solicitud de prestamo.

#### Parametros

`id`: Número de identificación del usuario visitante.

### /error/:id

Pantalla de error en caso de no existir el usuario.

#### Parametros

`id`: Número de identificación del usuario visitante.

### /success/:id

Pantalla de éxito al haber enviado la solicitud sin errores.

#### Parametros

`id`: Número de identificación del usuario visitante.

### *

Pantalla de error 404 cuando no se consigue la url suministrada.

## Componentes

### Form Component

`<FormComponent/>` 

#### Detalles

Este componente permite al usuario ingresar sus datos para realizar la solicitud de un prestamo.

#### Props

N/a

### Form Component

`<FormComponent/>` 

#### Detalles

Este componente permite al usuario ingresar sus datos para realizar la solicitud de un prestamo.

#### Props

N/a

#### Metodos

##### initForm()

Método para inicializar las variables
```js
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
```

##### submit()

Método para validar y enviar los datos al backend.
```js
submit(){
    this.$validator.validateAll().then((valid) => {
        if (valid) {
            this.loading = true;
            this.$axios.post('users/${this.$route.params.id}', this.form)
            .then(response => {
                this.loading = false;
                localStorage.setItem('user', JSON.stringify(response.data.data));
                this.$router.push({ path: `/success/${this.$route.params.id}` })
            }).catch(err => {
                if (err.response.data.status == 400 || err.response.data.status == 404) {
                    this.$router.push({ path: `/error/${this.$route.params.id}` })
                }
            })
        }
    });
},
```
##### allowedDates(date)

Método para validar que solo se puedan elegir fechas futura.

`date`: fecha actual

```js
allowedDates(date){
    return date > (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
}
```


### Home component

`<HomeComponent/>` 

#### Detalles

Este componente carga el nombre y email del usuario que esta visitando el sistema y muestra una bienvenida.

#### Props

N/a

#### Metodos

##### mounted
Método para cargar la información del usuario

```js
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
```

### Modal Error

`<ModalError/>` 

#### Detalles

Modal que indica que el usuario que ingreso al sistema no se encuentra en los registros.

#### Props

`showDialog`: Boolean, se utiliza para mostrar u ocultar la modal

`user_id`: Integer, id del usuario.

#### Metodos

N/a

## Vistas

### Error

#### Detalles

Vista para mostrar un error en caso de fallar en el envio de datos de la solicitud de prestamo

### Form

#### Detalles

Vista para cargar el formulario de solicitud de prestamo

### Home

#### Detalles

Vista para cargar la pantalla de inicio del sistema

### NotFound

#### Detalles

Vista para mostrar el error 404 en caso de no conseguir la url suministrada

### NotFound

#### Detalles

Vista para mostrar un mensaje de que la información fue enviada satisfactoriamente.


