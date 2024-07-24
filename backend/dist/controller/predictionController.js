"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictIncome = void 0;
const python_shell_1 = require("python-shell");
const predictIncome = (req, res) => {
    const features = req.body;
    console.log(features);
    const options = {
        mode: "text",
        pythonOptions: ["-u"],
        scriptPath: "./models",
        args: [
            features.age,
            features.workclass,
            features.fnlwgt,
            features.education,
            features.education_num,
            features.marital_status,
            features.occupation,
            features.relationship,
            features.race,
            features.sex,
            features.capital_gain,
            features.capital_loss,
            features.hours_per_week,
            features.native_country,
        ],
    };
    // Usar type casting para evitar errores de tipo
    const pyshell = new python_shell_1.PythonShell("predictionModel.py", options);
    let prediction = "";
    pyshell.on("message", (message) => {
        console.log(message); // Imprimir los mensajes del script de Python en la consola de Node.js
        prediction = message; // Capturar solo la última línea de salida
    });
    pyshell.end((err, code, signal) => {
        if (err) {
            console.error("Error:", err);
            res.status(500).send({ error: err.message });
        }
        else {
            console.log("El script de Python terminó con el código:", code, "y la señal:", signal);
            // Limpiar la predicción eliminando "Predicción: " y los caracteres extraños
            const cleanPrediction = prediction.replace("Predicción: ", "").trim();
            res.json({ prediction: cleanPrediction });
        }
    });
};
exports.predictIncome = predictIncome;
