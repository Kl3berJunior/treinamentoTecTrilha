Antes de iniciarmos qualquer aplicação é nescessario a presença do node.js, pois o Browser não entende TypeScript.

Antes de iniciar qualquer projeto, sempre que for a primeira vez executando o codigo, é nescessario a instalação do "npm" no diretorio atual aonde se encontra o projeto, exemplo: npm install

Depois fazemos a instalação do nosso compilador TypeScript com o comando: "  npm install typescript@4.2.2 --save-dev  ", passando o paremetro @ para dizermos qual versão sera usada no projeto, quando não passado o parametro, sera instalado a versão mais atual.

Também ha a criação do arquivo tsconfig.json, que sera o nosso compilador, convertendo nosso codigo em TS para JS.

Também é importante fazer duas alterações no arquivo package.json, pois queremos que o projeto seja dinamico, sendo assim, sempre que for feita alguma alteração e depois salvo, que a pagina seja recarregados com os novos arquivos compilados sem termos que parar a execução.
    O compile, por exemplo, é ha execução do nosso compilador.
        " compile": "tsc ",
    Já o watch é feito pra escutar o compilador.
        " watch": "tsc -w "
Assim sempre que for feita uma alteração e salvarmos, ele já compilara os arquivos e recarregara a pagina sem precisar parar a execução do projeto.