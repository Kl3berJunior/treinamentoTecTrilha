var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", function(){
    // XMLHttpRequest é o resposavel no JS por fazer requisições HTTP
    var xhr = new XMLHttpRequest(); 
    // Abre a requisição
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    // 
    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){

            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("invisivel")

            var resposta = xhr.responseText;
            //console.log(resposta);
            //console.log(typeof resposta);
            
            // Converte o JSON a um objeto JS
            var pacientes = JSON.parse(resposta);
            //console.log(pacientes);
            //console.log(typeof pacientes);
    
            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel")
        }
        
        

    })
    // Envia a requisição
    xhr.send();

})