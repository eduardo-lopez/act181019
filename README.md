### act181019

## Descripción del ejercicio
Desarrolle un programa en Node.js donde la primera versión del API regrese el id y nombre del empleado. La segunda versión del API, regrese #id, nombre y apellido. Cada versión del API Empleados tendrá su propia ruta en el URL.

## Instrucciones
Comando correr la app
> node app.js

## Probar la app
# El URL de la version 1 del API
*Muestra el ID y Nombre en formato JSON*
http://localhost:50000/v1/employees

# El URL de la version 2 del API
*Muestra el ID, Nombre y Apellido en formato JSON*
http://localhost:50000/v1/employees

## Codigo fuente en app.js
* El codigo hace uso de la libreria express
* Se corre el proceso de node en el puerto 9229
* Se utiliza un sólo array para ambas versiones del API
* Todo el codigo fuente para esta actividades esta en app.js

```javascript
var express = require("express");
const port = 9229;

// Request packages
var app = express();

// Declare an array of JSON objects
const employees = [
    { id: 1, name: "John", lastName: "Smith" },
    { id: 2, name: "Peter", lastName: "Quill" }
];

// Route to employees v1
app.get("/v1/employees", function (req, res) {
    var r = [];

    for (var i = 0; i < employees.length; i++) {
        var employee = {
            "id": employees[i].id,
            "name": employees[i].name
        };
        r.push(employee);
    }

    // Print JSON array
    res.json({ r });
});

// Route to employees v2
app.get("/v2/employees", function (req, res) {
    // Print JSON array
    res.json({ employees });
});

app.listen(port, function () {
    console.log(`App running in port ${port}`);
});
```
