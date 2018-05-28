// Requieres es una importación de librerias
var express = require('express');
var moongose = require('mongoose');
var bodyParser = require('body-parser');

//Inicialización de las varibales 
var app = express();

//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importar ruta

var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuarios');
var loginRoutes = require('./routes/login');

//Conexión DB

moongose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, res) => {
    if (err) throw err;
    console.log('Monogo: \x1b[36m%s\x1b[44m', 'Online');


});

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
    console.log('Servidor: \x1b[36m%s\x1b[44m', 'John López');
});