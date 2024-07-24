import { Request, Response } from "express";
import { PythonShell, Options } from "python-shell";

export const predictIncome = (req: Request, res: Response): void => {
  const features = req.body;
  console.log(features);
  const options: Options = {
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
  const pyshell = new PythonShell("predictionModel.py", options);

  let prediction = "";

  pyshell.on("message", (message) => {
    console.log(message); // Imprimir los mensajes del script de Python en la consola de Node.js
    prediction = message; // Capturar solo la última línea de salida
  });

  pyshell.end((err, code, signal) => {
    if (err) {
      console.error("Error:", err);
      res.status(500).send({ error: err.message });
    } else {
      console.log(
        "El script de Python terminó con el código:",
        code,
        "y la señal:",
        signal
      );
      // Limpiar la predicción eliminando "Predicción: " y los caracteres extraños
      const cleanPrediction = prediction.replace("Predicción: ", "").trim();
      res.json({ prediction: cleanPrediction });
    }
  });
};
