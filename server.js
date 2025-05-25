const express = require('express');
const fs = require('fs');
const { parse } = require('csv-parse');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilitar CORS para permitir que el frontend acceda a la API
app.use(cors());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Endpoint para obtener los datos del CSV
app.get('/api/datos', (req, res) => {
  const datos = [];
  
  fs.createReadStream('./data/Consum_d_aigua_a_Catalunya_per_comarques_20250525.csv')
    .pipe(parse({ delimiter: ',', columns: true }))
    .on('data', (row) => {
      // Convertir campos numéricos a números para facilitar el uso en el frontend
      row['Any'] = parseInt(row['Any']);
      row['Codi comarca'] = parseInt(row['Codi comarca']);
      row['Població'] = parseInt(row['Població']);
      row['Domèstic xarxa'] = parseInt(row['Domèstic xarxa']);
      row['Activitats econòmiques i fonts pròpies'] = parseInt(row['Activitats econòmiques i fonts pròpies']);
      row['Total'] = parseInt(row['Total']);
      row['Consum domèstic per càpita'] = parseFloat(row['Consum domèstic per càpita']);
      datos.push(row);
    })
    .on('end', () => {
      res.json(datos);
    })
    .on('error', (error) => {
      res.status(500).json({ error: 'Error al leer el archivo CSV' });
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});