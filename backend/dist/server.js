"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors")); // Importar cors
const predictionRoutes_1 = __importDefault(require("./routes/predictionRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'], // Permitir los métodos GET y POST
    credentials: true
}));
// Usar body-parser para parsear las peticiones JSON
app.use(body_parser_1.default.json());
// Definir la ruta para las predicciones
app.use('/predict', predictionRoutes_1.default);
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
