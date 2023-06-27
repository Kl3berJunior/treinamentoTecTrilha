
// Calcula IMC dos pacientes e faz validacao
var pacientes = document.querySelectorAll('.paciente');
for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido){
        pesoEhValido = false;
        tdPeso.textContent = "Peso invalido"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaEhValido){
        alturaEhValido = false;
        tdAltura.textContent = "Altura invalida"
        paciente.classList.add("paciente-invalido")
    }
    if (pesoEhValido && alturaEhValido){
        var imc = calculaImc(peso,altura);
        tdIMC.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / ( altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura>= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}
