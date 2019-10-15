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
  // const nombre = persona.nombre
  const { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  };
}
