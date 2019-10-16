function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8;
};

const sacha = new Persona("Sacha", "Lifszyc", 1.72);
const erika = new Persona("Erika", "Luna", 1.65);
const arturo = new Persona("Arturo", "Martinez", 1.89);
