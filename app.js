let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) { 
        asignarTextoElemento('h1', 'Juego Terminado');
        asignarTextoElemento('p','Ya has sorteado los numeros posibles');
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
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroSecreto == numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value ='';
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    //Indicar intervalo de numeros
    //Generar el número aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //Dehabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();



