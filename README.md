# Predictora de Ingresos - Prueba Conjunta

## Descripción

La aplicación **Predictora de Ingresos** es una herramienta diseñada para predecir si un individuo gana más o menos de 50,000 dólares al año, basada en una serie de características personales y laborales. Utiliza un modelo de aprendizaje automático que recibe entradas a través de un formulario interactivo y muestra la predicción en tiempo real.

La aplicación está construida con **React** para el frontend y **Express** para el backend. Utiliza Bootstrap para el diseño y la presentación de los formularios.

El proyecto se levantara automaticamente gracias a docker, el frontend se levantara en el puerto 3001 con la ip de tu maquina mientras que el backend se levantara en el puerto 3000
## Funcionalidades

- **Formulario de Entrada**: Permite al usuario ingresar información sobre su edad, ocupación, nivel educativo, y más.
- **Predicción en Tiempo Real**: Envía los datos al servidor y muestra la predicción basada en el modelo entrenado.
- **Interfaz de Usuario Amigable**: Diseño atractivo y responsivo utilizando React Bootstrap.

## Tecnologías Utilizadas

- **Frontend**: React, React-Bootstrap
- **Backend**: Express (Node.js)
- **Estilo**: CSS, React-Bootstrap

## Instalación

### Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- O docker

### Levantar jupyter con tensor flow

1. Contenedor de jupyter + tensorflow  
   ```bash
   docker run -it --rm -p 8888:8888 tensorflow/tensorflow:latest-jupyter

2. Subir el dataset y los archivos correspondientes y ejecutar los notebooks

### Configuración del proyecto

1. Clona el repositorio 
   ```bash
   git clone https://github.com/JoelArg02/Apl-Basdas-Prueba-Arguello-Mora.git

2. Ejecuta el proyecto en la carpeta raíz del proyecto.
    ```bash
    docker compose up

# EL proceso de ejecución puede demorar un tiempo en especial al levantar el FrontEnd

## Uso

1. Abre tu navegador web y ve a `http://localhost:3001`.
2. Completa el formulario con la información requerida.
3. La predicción se mostrará en tiempo real basada en los datos ingresados.

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios (`git checkout -b feature/mi-nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Envía un pull request.

