// Esta es la función que maneja la petición
const getHelloWorld = (req, res) => {
  res.status(200).json({ message: '¡Hola Mundo desde una estructura organizada!' });
};

// Exportamos la función para poder usarla en otro archivo
module.exports = {
  getHelloWorld
};