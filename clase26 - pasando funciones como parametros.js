class Persona {
    constructor(nombre, apellido, altura) {
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
    }
  
    saludar(fn) {
      var { nombre, apellido } = this
  
      console.log(`Hola, me llamo ${nombre} ${apellido}`)
      if (fn) {
        fn(nombre, apellido)
      }
    }
  
    soyAlto() {
      return this.altura > 1.8
    }
  }