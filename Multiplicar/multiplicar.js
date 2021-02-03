const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  console.log(`============Tabla de ${base}=============`.green);
  console.log(`Tabla de ${base}`.green);
  console.log(`============Tabla de ${base}=============`.green);
  let data = "";
  for (let i = 1; i <= limite; i++) {
    data += `${base}* ${i} = ${base * i} \n`;
  }
  console.log(data);
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido "${base}" no es un número`);
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base}* ${i} = ${base * i} \n`;
    }

    fs.writeFile(`Tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-del-${base}-al-${limite}.txt`.green);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
