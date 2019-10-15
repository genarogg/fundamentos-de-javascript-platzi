const sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28
};

const dario = {
  nombre: "Darío",
  apellido: "Susnisky",
  edad: 27
};

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  const { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad() {
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años
}
