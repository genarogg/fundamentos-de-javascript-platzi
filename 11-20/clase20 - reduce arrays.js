const sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111
};

const alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78
};

const martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132
};

const dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90
};

const vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91
};

const paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182
};

const esAlta = ({ altura }) => altura > 1.8;

const personas = [sacha, alan, martin, dario, vicky, paula];

const personasAltas = personas.filter(esAlta);
// const personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

// persona.altura = persona.altura * 100
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

const personasCms = personas.map(pasarAlturaACms);

// const acum = 0
//
// for (const i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

const totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);
