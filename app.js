// Requieres es una importación de librerias
var express = require('express');
var moongose = require('mongoose');

//Inicialización de las varibales 
var app = express();

//Conexión DB

moongose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, res) => {
    if (err) throw err;
    console.log('Monogo: \x1b[36m%s\x1b[44m', 'Online');


});

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
})

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
    console.log('Servidor: \x1b[36m%s\x1b[44m', 'John López');
});