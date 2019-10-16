const sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72
};

const alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};

const martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};

const dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71
};

const vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56
};

const paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76
};

const personas = [sacha, alan, martin, dario, vicky, paula];

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}
