//Adiciona novo paciente a lista
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    // Previne o compartamento padrão
    event.preventDefault();
    // Extrai os dados do FORM e adiciona ao objeto PACIENTE
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);
    
    // recebe os erros de validação
    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }
    
    adicionaPacienteTabela(paciente);

    // Limpa o form e a ul
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    form.reset();

});

function adicionaPacienteTabela(paciente){
    // Cria a tr e os td
    var pacienteTr = montaTr(paciente);
    // Adicona pacienteTr a tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(erro => {
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
    });

    /*erros.array.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
     });*/

    /*for(var i = 0; i < erros.length; i++){
        console.log(erros);
        var li = document.createElement("li");
        li.textContent = erros[i];
        ul.appendChild(li);
        console.log(li);

    }*/
}

function obtemPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Adciona a td ao pacienteTr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    
    var erros = [];
     
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco")
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalida");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco")
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco")
    }

    return erros;
}


