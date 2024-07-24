import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Importar cors
import predictionRoutes from './routes/predictionRoutes';

const app: Application = express();
const port: number = 3000;


app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST'],  // Permitir los métodos GET y POST
  credentials: true
}));

// Usar body-parser para parsear las peticiones JSON
app.use(bodyParser.json());

// Definir la ruta para las predicciones
app.use('/predict', predictionRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
