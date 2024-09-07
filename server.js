const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const cors = require('cors');

const taskRoutes = require('./routes/task.route');

dotenv.config();

const app = express();

// Utiliser le middleware CORS pour autoriser les requêtes cross-origin
app.use(cors({
    origin: 'http://localhost:3003', // Remplace par l'URL de ton frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Spécifie les méthodes autorisées
    credentials: true, // Si tu utilises des cookies ou des informations d'authentification
}));

app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);

const PORT = process.env.PORT || 4500;

// Connexion à la base de données
connectDB();

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
