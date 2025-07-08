const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('MoliLinks API is running 🚀');
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  })
  .catch(err => console.error('Error conectando a MongoDB', err));

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const linkRoutes = require('./routes/links');
app.use('/links', linkRoutes);

const publicRoutes = require('./routes/public');
app.use('/u', publicRoutes);  // Ejemplo: /u/moli
