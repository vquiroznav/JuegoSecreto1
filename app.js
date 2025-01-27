let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){    
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);   

   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste de pana en ${intentos} ${(intentos === 1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");    
    } else {
        if(numeroDeUsuario > numeroSecreto) {-
        asignarTextoElemento("p","El numero es ma xiko");
    } else {
        asignarTextoElemento("p","mas wrande");
     }  
     intentos++ 
     limpiarCaja(); 
    }
   return;
    
}

function limpiarCaja() { 
    let valorCaja = document.querySelector("#valorUsuario")
    valorCaja.value ='';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya salieron todos los numeros we")

    } else {
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();                
     } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}


function condicionesIniciales() {
    asignarTextoElemento("h1","Este es el juego más pulento");
    asignarTextoElemento("p",`Ingresa un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio  
    //generar numero aleatorio
    //reiniciar numero de intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales ();
