const express = require("express");

let koders = ["Erick", "Elvira", "Manuel", "Carlos", "Diana", "Fernanda"];

const server = express(); // Crea un servidor con express, tambien es comun que la gente lo llame app

server.use(express.json()); // Middleware para que el servidor pueda leer json, es importante que este antes de las rutas, esta funcion se encarga de crear el body de la peticion

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

// Funcion para agregar koders
server.post("/koders", (request, response) => {
  console.log("post /koders");
  console.log("body", request.body);

  console.log("name", request.body.name);

  const name = request.body.name;

  // falsies: 0, "", null, undefined
  if (!name) {
    response.status(400).json({ message: "Name is required" });
    return; // Para que no siga ejecutando el codigo
  }

  koders.push(name);

  response.json(koders);
});
// Resetear la lista de koders
//"/koders/:name" lo hacemos dinamico para que podamos borar un koder en especifico el uso de los ":"
server.delete("/koders/:name", (request, response) => {
  console.log("params", request.params); // Params es un objeto que contiene los parametros que se mandan en la url

  const name = request.params.name;

  const newKoders = koders.filter(
    (koder) => koder.toLowerCase() !== name.toLowerCase()
  ); // filter crea un nuevo arreglo
  koders = newKoders; // Reasignamos el valor
  response.json(koders);
});
// Borrar un koder
server.delete("/koders", (request, response) => {
  koders = [];
  response.json(koders);
});
// Middleware, para escuchar al servidor
server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
