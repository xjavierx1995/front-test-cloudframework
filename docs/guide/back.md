# Documentación BackEnd

Esta sección es para explicar la parte del backend solicitada para la prueba

## Modelo de entidad relacional

![img](/MER.png)

## Diccionario de datos

### Tabla users

#### Descripción

En esta tabla se guardan los datos del usuario

#### Campos

`id`: int, PK, numero de identificacion del registro.

`name`: varchar(255), nombre del usuario.

`surname`: varchar(255), apellido del usuario.

`email`: varchar(100), correo electrónico del usuario.

`phone`: varchar(45), Número de teléfono del usuario.

`age`: int(100) Edad del usuario.

### Tabla loans

#### Descripción

En esta tabla se registran los prestamos solicitados por los usuarios

#### Campos

`id`: int, PK, numero de identificacion del registro.

`loan_amount`: double, monto solicitado para el prestamo.

`loan_date`: double, fecha de solicitud del prestamo.

`loan_weeks`: int(20), numero indicador de semanas a pagar.

`check`: varchar(45), Campo de verificacion de terminos y condiciones.

`user_id`: int(100), FK, identificacion del registro del usuario que realizo la solicitud.

## SQL

```sql

CREATE SCHEMA IF NOT EXISTS `cloudframeworkdb` DEFAULT CHARACTER SET utf8 ;
USE `cloudframeworkdb` ;

-- -----------------------------------------------------
-- Table `cloudframeworkdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cloudframeworkdb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `surname` VARCHAR(255) NULL,
  `email` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `age` INT(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cloudframeworkdb`.`loans`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cloudframeworkdb`.`loans` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `loan_amount` DOUBLE NULL,
  `loan_date` DATE NULL,
  `loan_weeks` INT(20) NULL,
  `check` TINYINT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_loans_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_loans_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `cloudframeworkdb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


```

## Conexión con PHP

El siguiente script se desarrollo con php, para realiza la conexión a la base de datos mysql, explicada al principio de la sección, y retorna los datos en formato JSON.

```php
<?php

//datos de acceso
$servername = "127.0.0.1";
$database = "cloudframework";
$username = "root";
$password = "";

// Crear conexion
$conn = mysqli_connect($servername, $username, $password, $database);

// Verificar conexion
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// preparar consulta sql
$query = "SELECT * FROM `user`";

// Realizar consulta a BD
$result = mysqli_query($conn, $query);

$data = array();

if($result){
    // Preparar los datos
    while($row = mysqli_fetch_assoc($result)){
        $data['data'][] = $row;
    }
    // Mostrar
    echo json_encode($data);
}

mysqli_close($conn);

```

### Resultado

![img](/res_php.png)

## Conexión con Node

El siguiente script se desarrollo con Nodejs, para realiza la conexión a la base de datos mysql se utilizó la libreria `yarn add mysql`.

```js

//Obtener el paquete de mysql
var mysql = require('mysql');

//Configuracion de conexión
var conn = mysql.createConnection({
    host: '127.0.0.1',
    database: 'cloudframework',
    user: 'root',
    password: ''
});

//Abrir conexión
conn.connect(function(error){
    //Verificar conexión
    if (error) {
        throw error;
    }else{
        console.log('Conexión exitosa');
    }
})

//Crear y ejecutar consulta sql
conn.query('SELECT * FROM `user`', function (error, results, fields) {
    if (error) throw error;

    
    let data = Object.values(JSON.parse(JSON.stringify(results)))
    console.log(data);
    return data;
});

//Cerrar conexión
conn.end();

```

### Resultado

![img](/res_node.png)

## Documentación Postman

Postman provee de documentación de tus api en su web page

![img](/api_1.png)
![img](/api_2.png)
