const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = 3000;

// Servir archivos estáticos de /public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para listar imágenes en /public/imagenes
app.get('/api/imagenes', (req, res) => {
  const folder = path.join(__dirname, 'public', 'imagenes');
  fs.readdir(folder, (err, files) => {
    if (err) {
      return res.json([]); // En caso de error, enviar array vacío
    }
    // Filtrar solo png, jpg, jpeg
    const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
    const paths = images.map(img => '/imagenes/' + img);
    res.json(paths);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
