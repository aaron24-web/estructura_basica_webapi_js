const express = require('express');
const router = express.Router();

// Importamos la función específica desde nuestro controlador
const { getHelloWorld } = require('../controllers/Hello.controller.js');

// Cuando se haga una petición GET a la raíz ('/'), se ejecutará getHelloWorld
router.get('/', getHelloWorld);

// Exportamos el router para que el archivo principal lo pueda usar
module.exports = router;