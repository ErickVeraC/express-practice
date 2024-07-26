const express = require("express");

const koders = ["Erick", "Elvira", "Manuel", "Carlos", "Diana", "Fernanda"];

const server = express(); // Crea un servidor con express, tambien es comun que la gente lo llame app

// Ejercicio de muestra con koders
server.get("/", (request, response) => {
  //Esta funcion va a escuchar las peticiones GET que lleguen a la ruta
  response.writeHead(200, { "Content-Type": "text/plain" }); // Codigo de respuesta 200, y el tipo de contenido que va a devolver
  response.write("Hello World"); // Mensaje que va a devolver
  response.end(); // Finaliza la respuesta
});

// Funcion para listar koders
server.get("/koders", (request, response) => {
  response.json(koders);
  //response.status(500).json(koders); Asi le agregamos el status a la respuesta esperada especificando el codigo de respuesta
});
// Middleware, para escuchar al servidor
server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
