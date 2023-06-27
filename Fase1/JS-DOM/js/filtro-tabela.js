
var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){

        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // O RegExp é um REGEX e uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa 
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        })

        /*for(var i  = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
    
            if(nome != this.value){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }*/
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        })
    }

})