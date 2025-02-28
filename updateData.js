const fs = require('fs');
const path = require('path');

// Ruta al archivo data.json
const filePath = path.join(__dirname, 'src', 'data', 'data.json');

// Función para generar un año aleatorio entre 1990 y 2022
function getRandomYear() {
  return Math.floor(Math.random() * (2022 - 1990 + 1)) + 1990;
}

// Leer el archivo data.json
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Parsear el contenido del archivo JSON
  const jsonData = JSON.parse(data);

  // Agregar la propiedad fechaInstalacion a cada objeto de energía
  jsonData.energias.forEach(energia => {
    energia.fechaInstalacion = getRandomYear();
  });

  // Convertir el objeto JSON de nuevo a una cadena
  const updatedData = JSON.stringify(jsonData, null, 2);

  // Escribir los cambios de vuelta al archivo data.json
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
      return;
    }
    console.log('Archivo data.json actualizado con éxito.');
  });
});