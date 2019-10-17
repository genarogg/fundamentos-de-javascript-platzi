
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 3;

class Juego {

    constructor() {

        this.inicializar = this.inicializar.bind(this);
        this.inicializar();
        this.generarSecuencia();
        setTimeout(this.siguienteNivel, 500)
    }

    inicializar() {

        this.siguienteNivel =this.siguienteNivel.bind(this);
        this.elegirColor = this.elegirColor.bind(this);
        /* btnEmpezar.classList.add('hide'); */
        this.toggleBtnEmpezar();
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains("hide")){
            btnEmpezar.classList.remove("hide");
        }
        else{
            btnEmpezar.classList.add("hide");
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    

    

    

    

    
    
    

    

    

    

    
}