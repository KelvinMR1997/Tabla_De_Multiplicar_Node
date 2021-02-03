// Requires
// const fs = require("fs");
// const fs = require('express');

const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require("./Multiplicar/multiplicar");
const colors = require("colors");

let comando = argv._[0];
switch (comando) {
  case "listar":
    console.log("listar");
    console.log(listarTabla(argv.base, argv.limite));
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado : ${archivo}`))
      .catch((err) => console.log(err));
    console.log("crear");
    break;
  default:
    console.log("Comando no reconocido");
}
// console.log(argv);
// let argv2 = process.argv;

// console.log("Limite", argv.limite);
// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(base);

// multiplicar.crearArchivo;
