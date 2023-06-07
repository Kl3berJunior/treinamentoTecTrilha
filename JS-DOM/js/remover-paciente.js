
//Olha apenas para os pacientes
var tabelaPacientes = document.querySelector("#tabela-pacientes");
// Adciona um evento de dplClick
tabelaPacientes.addEventListener("dblclick", function(event){
    // Diz quem foi o alvo do dplClick ou seja a td indicada 
    var alvoEvento = event.target;
    // Busca o pai da td ou seja a tr
    var paiDoEvento = alvoEvento.parentNode;
    // Adiciona o efeito de transação
    paiDoEvento.classList.add("fadeOut");
    // remove o elemento do HTML
    setTimeout(function(){
        paiDoEvento.remove();
    }, 500);
    
});


/*
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});
*/