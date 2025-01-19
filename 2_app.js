// variables
let numeroMaximoPosible = 100
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1 ;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez'
let maximosIntentos = prompt('cuántos intentos quieres?')

while (numeroSecreto != numeroUsuario) {

    numeroUsuario = parseInt(prompt(`Adivina el número entre el 1 y ${numeroMaximoPosible}: `));
    if (numeroUsuario == numeroSecreto) {
        alert(`Adivinaste, era el número ${numeroUsuario}. Lo intentaste ${intentos} ${palabraVeces}`);
    } else{ 
        if (numeroUsuario > numeroSecreto) {
            alert('El número es menor');
        } else {
            alert('El número es mayor');
        }
        intentos += 1;
        palabraVeces = 'veces';
        
    if (intentos > maximosIntentos) {
        alert(`Número máximo de ${maximosIntentos} intentos alcanzado`);
        break;
    }
    
    }
}