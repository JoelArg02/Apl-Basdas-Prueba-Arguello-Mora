import pandas as pd
import joblib
import sys

# Recibir los argumentos de la línea de comandos
args = sys.argv[1:]

# Mapa de características con sus valores
data = {
    "age": int(args[0]),
    "workclass": args[1],
    "fnlwgt": int(args[2]),
    "education": args[3],
    "education_num": int(args[4]),
    "marital_status": args[5],
    "occupation": args[6],
    "relationship": args[7],
    "race": args[8],
    "sex": args[9],
    "capital_gain": int(args[10]),
    "capital_loss": int(args[11]),
    "hours_per_week": int(args[12]),
    "native_country": args[13]
}

# Convertir a DataFrame
df = pd.DataFrame([data])

# Cargar el scaler, label_encoders, y el modelo
scaler, label_encoders, svm = joblib.load('preprocessor_and_model.pkl')

# Codificar las características categóricas
categorical_features = ['workclass', 'education', 'marital_status', 'occupation', 'relationship', 'race', 'sex', 'native_country']
for feature in categorical_features:
    df[feature] = label_encoders[feature].transform(df[feature])

# Normalizar las características numéricas
df_normalized = scaler.transform(df)

# Realizar la predicción
prediccion = svm.predict(df_normalized)
print(f'{prediccion[0]}')
