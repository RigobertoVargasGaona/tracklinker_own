const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3306;

// Configura la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',      // Cambia si es necesario
  user: 'root',     // Tu usuario de MySQL
  password: '',// Tu contraseña de MySQL
  database: 'DB_TRACKLINKER'// Tu base de datos
});

// Middleware para validar API key
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = 'TU_API_KEY_SECRETA'; // Cambia por tu API key real

  if (!apiKey) {
    return res.status(401).json({ error: 'API key faltante' });
  }
  if (apiKey !== validApiKey) {
    return res.status(403).json({ error: 'API key inválida' });
  }
  next();
};

// Aplica el middleware a todas las rutas
app.use(apiKeyMiddleware);

// Ruta para obtener datos
app.get('/datos', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error en consulta a la base de datos' });
    }
    res.json(results);
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
