var express = require("express");
const port = 9229;

/**
Desarrolle un programa en Node.js donde la primer versión del API regresa el id y nombre del empleado.
La segunda versión del API, regresará id, nombre y apellido.
Cada versión del API Empleados tendrá su propia ruta en el URL.
Utilice el siguiente ejemplo como apoyo.
**/

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