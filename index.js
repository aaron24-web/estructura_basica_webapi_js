const express = require('express');

// Importamos nuestras rutas
const helloRoutes = require('./src/api/routes/Hello.routes.js');

const app = express();
const port = 3000;

// Middleware para que la app entienda JSON
app.use(express.json());

// Le decimos a nuestra aplicación que use las rutas que importamos.
// Todas las rutas definidas en hello.routes.js ahora estarán bajo el prefijo '/api'
app.use('/api', helloRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});