"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importar cors
const predictionRoutes_1 = __importDefault(require("./routes/predictionRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204
}));
app.use(express_1.default.json());
app.set('trust proxy', true);
// Definir la ruta para las predicciones
app.use('/predict', predictionRoutes_1.default);
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
