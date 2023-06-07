//Adiciona novo paciente a lista
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    // Previne o compartamento padrão
    event.preventDefault();
    // Extrai os dados do FORM e adiciona ao objeto PACIENTE
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);
    // Cria a tr e os td
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    console.dir(erros);
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    // Adicona pacienteTr a tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    // Limpa o form
    //form.reset();
});

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    
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
     
    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido");
        return erros;
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalida");
        return erros;
    }
}


